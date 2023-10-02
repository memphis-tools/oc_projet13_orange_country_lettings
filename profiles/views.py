from django.shortcuts import render

from .models import Profile


def index(request):
    """Return the template named profiles/index.html
    which is the index for profiles sub-application."""
    profiles_list = Profile.objects.all()
    context = {"profiles_list": profiles_list}
    return render(request, "profiles/index.html", context)


def profile(request, username):
    """Return the template named profiles/profile.html which is the detail view of profile instance.
    Keyword arguments:
    request -- default Django object
    username -- string, name of user
    """
    profile = Profile.objects.get(user__username=username)
    context = {"profile": profile}
    return render(request, "profiles/profile.html", context)
