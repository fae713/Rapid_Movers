from django.contrib import admin
from .models import User, UserProfile, DeliveryOption, Order, Tracking, Payment, SupportTicket, Notification


# User Admin
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'last_name', 'phone_number', 'is_active', 'date_joined')
    search_fields = ('email', 'first_name', 'last_name')
    list_filter = ('is_active', 'authentication_provider')
    ordering = ('-date_joined',)
    list_per_page = 20


# UserProfile Admin
@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'secondary_contact', 'preferred_notification_method')
    search_fields = ('user__email',)
    list_filter = ('preferred_notification_method',)


# DeliveryOption Admin
@admin.register(DeliveryOption)
class DeliveryOptionAdmin(admin.ModelAdmin):
    list_display = ('name', 'delivery_time_range', 'additional_cost')
    search_fields = ('name',)
    list_filter = ('delivery_time_range',)

# Order Admin
@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('order_number', 'user', 'status', 'order_date', 'cost', 'payment_status')
    search_fields = ('order_number', 'user__email')
    list_filter = ('status', 'payment_status', 'delivery_option')
    ordering = ('-order_date',)
    # Remove the inlines since OrderInline is not valid
    # inlines = [OrderInline]  <-- This line is not necessary
    fieldsets = (
        (None, {
            'fields': ('user', 'order_number', 'order_date', 'cost', 'status', 'payment_status')
        }),
        ('Address Information', {
            'fields': ('delivery_address', 'pickup_address')
        }),
        ('Tracking and Delivery', {
            'fields': ('tracking_id', 'delivery_option', 'estimated_delivery_date')
        }),
    )


# Tracking Admin
@admin.register(Tracking)
class TrackingAdmin(admin.ModelAdmin):
    list_display = ('order', 'current_status', 'current_location', 'timestamp')
    search_fields = ('order__order_number', 'current_status')
    list_filter = ('current_status',)
    ordering = ('-timestamp',)


# Payment Admin
@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ('order', 'payment_reference', 'amount_paid', 'payment_method', 'payment_status', 'payment_date')
    search_fields = ('order__order_number', 'payment_reference')
    list_filter = ('payment_status', 'payment_method')
    ordering = ('-payment_date',)


# SupportTicket Admin
@admin.register(SupportTicket)
class SupportTicketAdmin(admin.ModelAdmin):
    list_display = ('ticket_number', 'user', 'status', 'created_date', 'resolved_date')
    search_fields = ('ticket_number', 'user__email')
    list_filter = ('status',)
    ordering = ('-created_date',)


# Notification Admin
@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = ('user', 'message', 'notification_type', 'read_status', 'created_timestamp')
    search_fields = ('user__email', 'message')
    list_filter = ('notification_type', 'read_status')
    ordering = ('-created_timestamp',)
    list_per_page = 20
