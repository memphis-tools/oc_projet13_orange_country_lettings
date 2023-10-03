import pytest

from django.test import Client
from profiles.models import Profile


@pytest.mark.django_db
def test_profile_model(get_dummy_db):
    client = Client()
    profile = Profile.objects.get(id=1)
    expected_value = "jrodriguez"
    assert str(profile) == expected_value
