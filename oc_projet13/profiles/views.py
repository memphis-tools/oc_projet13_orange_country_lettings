from django.shortcuts import render
import logtail_handler
from .models import Profile


LOGGER = logtail_handler.logger


def index(request):
    """
    Return the template named profiles/index.html
    which is the index for profiles sub-application.

    Returns
    -------

    index: Return the template named profiles/index.html


    """
    try:
        profiles_list = Profile.objects.all()
        context = {"profiles_list": profiles_list}
        return render(request, "profiles/index.html", context)
    except Exception:
        message = f"Error - Page'profiles/index.html' not found"
        LOGGER.error(message)


def profile(request, username):
    """Return the template named profiles/profile.html which is the detail view of profile instance.

    Keyword arguments:

    request -- default Django object

    username -- string, name of user
    """
    try:
        profile = Profile.objects.get(user__username=username)
        context = {"profile": profile}
        return render(request, "profiles/profile.html", context)
    except Exception:
        message = f"Error - Username {username} not found"
        LOGGER.error(message)
