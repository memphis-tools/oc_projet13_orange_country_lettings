# Generated by Django 3.1.14 on 2023-10-02 19:27

from django.db import migrations
from oc_lettings_site.models import Address, Letting, Profile


class Migration(migrations.Migration):

    dependencies = [
        ('oc_lettings_site', '0003_auto_20231002_1659'),
    ]

    operations = [
        migrations.DeleteModel(name="Address"),
        migrations.DeleteModel(name="Letting"),
        migrations.DeleteModel(name="Profile")
    ]
