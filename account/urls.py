from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import *
urlpatterns = [
    # path('token-auth/', obtain_auth_token),
    path('users/',UsersView.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),      # Get token
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),     # Refresh token
    path('register/', RegisterView.as_view(), name='register'),
]
