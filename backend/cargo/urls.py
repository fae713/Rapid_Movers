from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, OrderViewSet, TrackingViewSet
from .views import LandingPageView, UserRegistrationView, UserLoginView, UserLogoutView, ChangePasswordView,UserProfileView

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'tracking', TrackingViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('', LandingPageView.as_view(), name='landing-page'),
    path('auth/register/', UserRegistrationView.as_view(), name='register'),
    path('auth/login/', UserLoginView.as_view(), name='login'),
    path('auth/logout/', UserLogoutView.as_view(), name='logout'),
    path('auth/change-password/', ChangePasswordView.as_view(), name='change-password'),
    path('auth/profile/', UserProfileView.as_view(), name='profile'),
    path('accounts/', include('allauth.urls')),
]
