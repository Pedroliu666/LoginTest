from django.test import TestCase

# Create your tests here.
import pytest
from django.urls import reverse
from rest_framework.test import APIClient
from django.contrib.auth.models import User


@pytest.mark.django_db
def test_successful_registration():
    client = APIClient()
    response = client.post(
        reverse("user-registration"),
        {"username": "testuser", "password": "testpassword", "email": "example@1.com"},
    )
    assert response.status_code == 201
    assert User.objects.count() == 1


@pytest.mark.django_db
def test_registration_with_missing_fields():
    client = APIClient()
    response = client.post(reverse("user-registration"), {"username": "testuser"})
    assert response.status_code == 400


@pytest.mark.django_db
def test_registration_with_invalid_data():
    client = APIClient()
    response = client.post(
        reverse("user-registration"), {"username": "", "password": ""}
    )
    assert response.status_code == 400


@pytest.mark.django_db
def test_registration_with_malformed_email():
    client = APIClient()
    response = client.post(
        reverse("user-registration"),
        {"username": "testuser", "password": "testpassword", "email": "invalid-email"},
    )
    assert response.status_code == 400
    assert "email" in response.data
