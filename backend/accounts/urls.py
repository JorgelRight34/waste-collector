from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    path('register/', views.register, name='register'),
    path('user-info/', views.user_info, name='user_info'),
    path('login/', views.login_view, name='login'),
    path('refresh/', TokenRefreshView.as_view(), name='refresh_token'),
]