"""
Rapid Movers Models.

These models represent the structure of the database tables.

Each model corresponds to a single database table,
and the attributes of the model represent the fields of the table.
"""

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _


from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models


class User(AbstractUser):
    email = models.EmailField(unique=True)
    profile_picture = models.ImageField(upload_to="profile_pics/", blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    authentication_provider = models.CharField(
        max_length=50,
        choices=[
            ("email", "Email"),
            ("google", "Google"),
            ("facebook", "Facebook"),
        ],
        default="email",
    )

    groups = models.ManyToManyField(
        Group,
        related_name="custom_user_groups",
        blank=True,
        help_text="The groups this user belongs to.",
        verbose_name="groups",
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="custom_user_permissions",
        blank=True,
        help_text="Specific permissions for this user.",
        verbose_name="user permissions",
    )

    def __str__(self):
        return self.email



# User Profile
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    secondary_contact = models.CharField(max_length=15, blank=True, null=True)
    preferred_notification_method = models.CharField(
        max_length=50,
        choices=[("email", "Email"), ("sms", "SMS")],
        default="email",
    )

    def __str__(self):
        return f"Profile of {self.user}"


# Delivery Options
class DeliveryOption(models.Model):
    name = models.CharField(max_length=50)
    delivery_time_range = models.CharField(max_length=100)
    additional_cost = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name


# Order Model
class Order(models.Model):
    STATUS_CHOICES = [
        ("pending", "Pending"),
        ("in_transit", "In Transit"),
        ("delivered", "Delivered"),
        ("cancelled", "Cancelled"),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="orders")
    order_number = models.CharField(max_length=20, unique=True)
    order_date = models.DateTimeField(auto_now_add=True)
    delivery_address = models.TextField()
    pickup_address = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="pending")
    cost = models.DecimalField(max_digits=10, decimal_places=2)
    payment_status = models.BooleanField(default=False)
    tracking_id = models.CharField(max_length=100, unique=True)
    delivery_option = models.ForeignKey(
        DeliveryOption, on_delete=models.SET_NULL, null=True, blank=True
    )
    estimated_delivery_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return f"Order {self.order_number} - {self.user.email}"


# Tracking Model
class Tracking(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE, related_name="tracking")
    current_status = models.CharField(max_length=50)
    current_location = models.CharField(max_length=255, blank=True, null=True)
    timestamp = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Tracking for Order {self.order.order_number}"


# Payment Model
class Payment(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE, related_name="payment")
    payment_reference = models.CharField(max_length=100, unique=True)
    amount_paid = models.DecimalField(max_digits=10, decimal_places=2)
    payment_date = models.DateTimeField(auto_now_add=True)
    payment_method = models.CharField(max_length=50)
    payment_status = models.BooleanField(default=False)

    def __str__(self):
        return f"Payment for Order {self.order.order_number}"


# Support Ticket
class SupportTicket(models.Model):
    STATUS_CHOICES = [
        ("open", "Open"),
        ("resolved", "Resolved"),
        ("pending", "Pending"),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="tickets")
    ticket_number = models.CharField(max_length=20, unique=True)
    issue_description = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="open")
    created_date = models.DateTimeField(auto_now_add=True)
    resolved_date = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return f"Ticket {self.ticket_number} - {self.user.email}"

# Notification
class Notification(models.Model):
    NOTIFICATION_TYPES = (
        ('order', 'Order Update'),
        ('payment', 'Payment Update'),
        ('shipment', 'Shipment Update'),
        ('general', 'General Notification'),
    )
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notifications")
    message = models.TextField()
    notification_type = models.CharField(max_length=50, blank=True, null=True)
    read_status = models.BooleanField(default=False)
    created_timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Notification for {self.user.email} - {self.message[:20]}"

    class Meta:
        ordering = ['-created_timestamp']