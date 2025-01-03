# cargo/views.py

from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import get_object_or_404

from .serializers import UserSerializer, UserRegistrationSerializer, UserLoginSerializer, ChangePasswordSerializer
from django.contrib.auth.hashers import make_password
from .models import User, UserProfile, DeliveryOption, Order, Tracking, Payment, SupportTicket, Notification



class LandingPageView(APIView):
    permission_classes = [AllowAny]
    
    def get(self, request):
        return Response({
            "message": "Welcome to Rapid Movers",
            "auth_endpoints": {
                "register": "/api/auth/register/",
                "login": "/api/auth/login/",
                "logout": "/api/auth/logout/",
                "change_password": "/api/auth/change-password/",
                "profile": "/api/auth/profile/"
            }
        }, status=status.HTTP_200_OK)

class UserRegistrationView(APIView):
    permission_classes = [AllowAny]
    serializer_class = UserRegistrationSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            user = User.objects.create(
                email=serializer.validated_data['email'],
                username=serializer.validated_data['email'],
                password=make_password(serializer.validated_data['password']),
                first_name=serializer.validated_data.get('first_name', ''),
                last_name=serializer.validated_data.get('last_name', '')
            )
            return Response({
                "message": "Registration successful",
                "user": UserSerializer(user).data
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLoginView(APIView):
    permission_classes = [AllowAny]
    serializer_class = UserLoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            user = authenticate(
                request,
                username=serializer.validated_data['email'],
                password=serializer.validated_data['password']
            )
            if user:
                login(request, user)
                return Response({
                    "message": "Login successful",
                    "user": UserSerializer(user).data
                }, status=status.HTTP_200_OK)
            return Response({
                "error": "Invalid credentials"
            }, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        logout(request)
        return Response({
            "message": "Logged out successfully"
        }, status=status.HTTP_200_OK)

class ChangePasswordView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ChangePasswordSerializer

    def put(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            user = request.user
            if user.check_password(serializer.validated_data['current_password']):
                user.set_password(serializer.validated_data['new_password'])
                user.save()
                return Response({
                    "message": "Password changed successfully"
                }, status=status.HTTP_200_OK)
            return Response({
                "error": "Current password is incorrect"
            }, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

    def put(self, request):
        serializer = UserSerializer(request.user, data=request.data, partial=True)
        if serializer.is_valid():
            # Check if email is being changed
            if 'email' in serializer.validated_data:
                return Response({
                    "error": "Email cannot be changed"
                }, status=status.HTTP_400_BAD_REQUEST)
            
            # Handle profile picture upload
            if 'profile_picture' in request.FILES:
                request.user.profile_picture = request.FILES['profile_picture']
            
            serializer.save()
            return Response({
                "message": "Profile updated successfully",
                "user": serializer.data
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)