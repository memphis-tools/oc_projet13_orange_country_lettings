from django.db import models
from django.core.validators import MaxValueValidator, MinLengthValidator


class Address(models.Model):
    """
    Set several attributes which represent an Address object.
    The __str__ methods returns a string representation based on 2 attributes:
    number and title.

    Attributes:

    number -- int, the number of street.

    street -- string, the street name.

    city -- string, the city name.

    state -- string, the state name.

    zip_code -- int, 3th december zipcode.

    country_iso_code -- string, the country iso code.
    """
    number = models.PositiveIntegerField(validators=[MaxValueValidator(9999)])
    street = models.CharField(max_length=64)
    city = models.CharField(max_length=64)
    state = models.CharField(max_length=2, validators=[MinLengthValidator(2)])
    zip_code = models.PositiveIntegerField(validators=[MaxValueValidator(99999)])
    country_iso_code = models.CharField(
        max_length=3, validators=[MinLengthValidator(3)]
    )

    def __str__(self):
        """Return a string representation for any print command"""
        return f"{self.number} {self.street}"

    class Meta:
        """
        We set a Meta class in order to have a correct display for "Addresses".
        """

        verbose_name = "Address"
        verbose_name_plural = "Addresses"


class Letting(models.Model):
    """
    Set several attributes which represent a Letting object.
    The __str__ methods returns a string representation based on 1 attribute:
    title.
    """

    title = models.CharField(max_length=256)
    address = models.OneToOneField(Address, on_delete=models.CASCADE)

    def __str__(self):
        """Return a string representation for any print command"""
        return self.title
