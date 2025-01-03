from django.test import TestCase
from django.core.files.uploadedfile import SimpleUploadedFile
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status
from .models import User
import os

class AuthenticationComprehensiveTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        # Create test user
        self.test_user = User.objects.create_user(
            email='existing@test.com',
            password='ValidPass123!',
            username='existing@test.com'
        )
        # Test image for profile picture
        self.test_image = SimpleUploadedFile(
            "test_image.jpg",
            b"file_content",
            content_type="image/jpeg"
        )

    def test_1_invalid_email_formats(self):
        """Test various invalid email formats"""
        invalid_emails = [
            'plainaddress',
            '@missingusername.com',
            'missing@period',
            'spaces in@email.com',
            'double@@at.com'
        ]
        
        for email in invalid_emails:
            data = {
                'email': email,
                'password': 'ValidPass123!',
                'first_name': 'Test'
            }
            response = self.client.post('/auth/register/', data)
            self.assertEqual(
                response.status_code, 
                status.HTTP_400_BAD_REQUEST,
                f"Email {email} should be invalid"
            )

    def test_2_password_strength(self):
        """Test password strength requirements"""
        weak_passwords = [
            '12345',           # too short
            'onlyletters',     # no numbers
            '123456789',       # no letters
            'nouppercase1',    # no uppercase
            'NOLOWERCASE1'     # no lowercase
        ]
        
        for password in weak_passwords:
            data = {
                'email': 'newuser@test.com',
                'password': password
            }
            response = self.client.post('/auth/register/', data)
            self.assertEqual(
                response.status_code, 
                status.HTTP_400_BAD_REQUEST,
                f"Password {password} should be rejected"
            )

    def test_3_duplicate_email(self):
        """Test duplicate email registration"""
        data = {
            'email': 'existing@test.com',  # Already created in setUp
            'password': 'ValidPass123!',
            'first_name': 'Test'
        }
        response = self.client.post('/auth/register/', data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('email', response.data)

    def test_4_invalid_current_password(self):
        """Test invalid current password for password change"""
        self.client.force_authenticate(user=self.test_user)
        data = {
            'current_password': 'WrongPass123!',
            'new_password': 'NewValidPass123!',
            'confirm_password': 'NewValidPass123!'
        }
        response = self.client.put('/auth/change-password/', data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_5_non_matching_passwords(self):
        """Test non-matching passwords during password change"""
        self.client.force_authenticate(user=self.test_user)
        data = {
            'current_password': 'ValidPass123!',
            'new_password': 'NewValidPass123!',
            'confirm_password': 'DifferentPass123!'
        }
        response = self.client.put('/auth/change-password/', data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_6_unauthorized_access(self):
        """Test unauthorized access to protected endpoints"""
        protected_endpoints = [
            ('put', '/auth/change-password/'),
            ('get', '/auth/profile/'),
            ('put', '/auth/profile/'),
            ('post', '/auth/logout/')
        ]
        
        for method, endpoint in protected_endpoints:
            response = getattr(self.client, method)(endpoint)
            self.assertEqual(
                response.status_code, 
                status.HTTP_401_UNAUTHORIZED,
                f"Endpoint {endpoint} should require authentication"
            )

    def test_7_profile_picture_upload(self):
        """Test profile picture upload constraints"""
        self.client.force_authenticate(user=self.test_user)
        
        # Test file size
        large_file = SimpleUploadedFile(
            "large_image.jpg",
            b"x" * 1024 * 1024 * 5,  # 5MB file
            content_type="image/jpeg"
        )
        
        response = self.client.put(
            '/auth/profile/',
            {'profile_picture': large_file},
            format='multipart'
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        
        # Test invalid file type
        invalid_file = SimpleUploadedFile(
            "test.txt",
            b"invalid content",
            content_type="text/plain"
        )
        
        response = self.client.put(
            '/auth/profile/',
            {'profile_picture': invalid_file},
            format='multipart'
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_8_email_modification(self):
        """Test prevention of email modification"""
        self.client.force_authenticate(user=self.test_user)
        data = {
            'email': 'newemail@test.com'
        }
        response = self.client.put('/auth/profile/', data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        # Verify email hasn't changed
        self.test_user.refresh_from_db()
        self.assertEqual(self.test_user.email, 'existing@test.com')

    def test_9_session_handling(self):
        """Test session handling and token expiry"""
        # Login
        login_data = {
            'email': 'existing@test.com',
            'password': 'ValidPass123!'
        }
        response = self.client.post('/auth/login/', login_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
        # Verify session is active
        response = self.client.get('/auth/profile/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
        # Logout
        response = self.client.post('/auth/logout/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
        # Verify session is inactive
        response = self.client.get('/auth/profile/')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_10_concurrent_sessions(self):
        """Test handling of concurrent sessions"""
        # Create two API clients
        client1 = APIClient()
        client2 = APIClient()
        
        # Login with both clients
        login_data = {
            'email': 'existing@test.com',
            'password': 'ValidPass123!'
        }
        
        response1 = client1.post('/auth/login/', login_data)
        response2 = client2.post('/auth/login/', login_data)
        
        self.assertEqual(response1.status_code, status.HTTP_200_OK)
        self.assertEqual(response2.status_code, status.HTTP_200_OK)
        
        # Test if both sessions are valid
        response1 = client1.get('/auth/profile/')
        response2 = client2.get('/auth/profile/')
        
        self.assertEqual(response1.status_code, status.HTTP_200_OK)
        self.assertEqual(response2.status_code, status.HTTP_200_OK)

    def tearDown(self):
        # Clean up any created files
        if hasattr(self, 'test_image'):
            if os.path.exists(self.test_image.name):
                os.remove(self.test_image.name)
