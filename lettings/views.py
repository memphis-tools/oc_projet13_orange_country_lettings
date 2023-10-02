from django.shortcuts import render

from .models import Letting


def index(request):
    """Return the template named lettings/index.html
    which is the index for lettings sub-application."""
    lettings_list = Letting.objects.all()
    context = {"lettings_list": lettings_list}
    return render(request, "lettings/index.html", context)


def letting(request, letting_id):
    """Return the template named lettings/letting.html
    which is the detail view of letting instance.
    Keyword arguments:
    request -- default Django object
    letting_id -- integer, id of the letting instance
    """
    letting = Letting.objects.get(id=letting_id)
    context = {
        "title": letting.title,
        "address": letting.address,
    }
    return render(request, "lettings/letting.html", context)


def handler404(request, exception):
    # error_code = 404
    # return render(request, 'error.html', context={"error_code": error_code})
    """
    Page not found Error 404
    """
    response = render_to_response('error.html',context_instance=RequestContext(request))
    response.status_code = 404
    return response


def handler500(request):
    error_code = 500
    return render(request, 'error.html', context={"error_code": error_code})
