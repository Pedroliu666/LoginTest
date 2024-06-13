from django.urls import path
from .views import UserRegistrationView, LoginView

urlpatterns = [
    path("register/", UserRegistrationView.as_view(), name="user-registration"),
    path("login/", LoginView.as_view(), name="user-login"),
]
