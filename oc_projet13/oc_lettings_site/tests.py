import pytest
from django.test.client import RequestFactory
from django.contrib.auth.models import User
from django.conf.urls import handler404

from django.urls import reverse, resolve
from django.test import Client


@pytest.mark.django_db
def test_index_url():
    client = Client()
    path = reverse('index', kwargs={})
    response = client.get(path)
    assert path == "/"
    assert response.status_code == 200
    assert resolve(path).view_name == "index"


@pytest.mark.django_db
def test_lettings_url():
    client = Client()
    path = reverse('lettings_index', kwargs={})
    response = client.get(path)
    assert path == "/lettings/"
    assert response.status_code == 200
    assert resolve(path).view_name == "lettings_index"


@pytest.mark.django_db
def test_lettings_detail_url(get_dummy_db):
    client = Client()
    path = reverse('letting', kwargs={'letting_id': 1})
    response = client.get(path)
    assert path == "/lettings/1/"
    assert response.status_code == 200
    assert resolve(path).view_name == "letting"


@pytest.mark.django_db
def test_profiles_url():
    client = Client()
    path = reverse('profiles_index', kwargs={})
    response = client.get(path)
    assert path == "/profiles/"
    assert response.status_code == 200
    assert resolve(path).view_name == "profiles_index"


@pytest.mark.django_db
def test_profiles_detail_url(get_dummy_db):
    client = Client()
    user = User.objects.get(id=1)
    path = reverse('profile', kwargs={'username': user.username})
    response = client.get(path)
    assert path == f"/profiles/{user.username}/"
    assert response.status_code == 200
    assert resolve(path).view_name == "profile"


@pytest.mark.django_db
def test_dummy_404_url():
    factory = RequestFactory()
    request = factory.get('/farine/ble')
    response = handler404(request, "")
    assert response.status_code == 404
