import pytest
from django.contrib.auth.models import User

from lettings.models import Address, Letting
from profiles.models import Profile


@pytest.fixture
def get_dummy_db():
    """Return a dummy database fixture for tests execution."""
    user = User()
    user.username = "jrodriguez"
    user.password = "jrodriguez"
    user.email = "coemperor@famemma.net"
    user.first_name = "John"
    user.last_name = "Rodriguez"
    user.save()

    address = Address()
    address.number = "6"
    address.street = "rue du moulin"
    address.city = "Saint Désiré"
    address.state = "Centre"
    address.zip_code = "03770"
    address.country_iso_code = "FRA"
    address.save()

    letting = Letting()
    letting.title = "Un site historique à revoir"
    letting.address = Address.objects.get(id=address.id)
    letting.save()

    profile = Profile()
    profile.user = User.objects.get(id=user.id)
    profile.favorite_city = address.id
    profile.save()
    return
