from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    """
    Set several attributes which represent a Profile object.
    We have a 1 to 1 relation between the Profile instance and an User class instance.
    The User class is the default Django one.

    The __str__ methods returns a string representation based on 1 attribute:
    username.
    """
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="new_user_profile"
    )
    favorite_city = models.CharField(max_length=64, blank=True)

    def __str__(self):
        """Return a string representation for any print command"""
        return self.user.username
