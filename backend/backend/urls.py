"""
URL configuration for backend project.
"""
from django.contrib import admin
from django.urls import path, include
from allauth.account.views import SignupView

urlpatterns = [
    #path("cargo/", include("cargo.urls")),
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('api/auth/', include('rest_framework.urls')),
]
