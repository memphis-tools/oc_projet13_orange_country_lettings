import pytest
from django.db.models.query import QuerySet
from django.test import Client
from django.urls import reverse
from django.urls.exceptions import NoReverseMatch
from lettings.models import Address, Letting
import logtail_handler


LOGGER = logtail_handler.logger


@pytest.mark.django_db
def test_address_model(get_dummy_db):
    address = Address.objects.get(id=1)
    expected_value = "6 rue du moulin"
    assert str(address) == expected_value


@pytest.mark.django_db
def test_letting_model(get_dummy_db):
    letting = Letting.objects.get(id=1)
    expected_value = "Un site historique à revoir"
    assert str(letting) == expected_value


@pytest.mark.django_db
def test_lettings_index_view():
    client = Client()
    path = reverse("lettings_index", kwargs={})
    response = client.get(path)
    assert isinstance(response.context["lettings_list"], QuerySet)


@pytest.mark.django_db
def test_letting_detail_view(get_dummy_db):
    client = Client()
    path = reverse("letting", kwargs={"letting_id": "1"})
    response = client.get(path)
    assert "Un site historique à revoir" == response.context["title"]


@pytest.mark.django_db
def test_unknow_letting_detail_view(get_dummy_db):
    with pytest.raises(NoReverseMatch):
        reverse("lettingxyz", kwargs={"letting_id": "1"})
