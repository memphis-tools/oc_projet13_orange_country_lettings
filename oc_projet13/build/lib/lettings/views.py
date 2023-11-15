from django.shortcuts import render
from .models import Letting
import logtail_handler
import socket


LOGGER = logtail_handler.logger
LOCAL_IP = socket.gethostbyname(socket.gethostname())

DUMMY_VAR_TO_TEST_FLAKE = "ThisMuStBeAVeryVeryVeryLongStringToAllowAGoodTestForFlake8"


def index(request):
    """Return the template named lettings/index.html
    which is the index for lettings sub-application."""
    try:
        lettings_list = Letting.objects.all()
        context = {"lettings_list": lettings_list, "user_ip": LOCAL_IP}
        return render(request, "lettings/index.html", context)
    except Exception:
        message = "Error - Page 'lettings/index.html' not found"
        LOGGER.error(message)


def letting(request, letting_id):
    """Return the template named lettings/letting.html
    which is the detail view of letting instance.
    Keyword arguments:

    request -- default Django object
    letting_id -- integer, id of the letting instance
    """
    try:
        letting = Letting.objects.get(id=letting_id)
        context = {
            "title": letting.title,
            "address": letting.address,
            "user_ip": LOCAL_IP,
        }
        return render(request, "lettings/letting.html", context)
    except Exception:
        message = f"Error - Page {letting_id} not found"
        LOGGER.error(message)
