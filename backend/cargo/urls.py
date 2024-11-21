from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, OrderViewSet, TrackingViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'tracking', TrackingViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
