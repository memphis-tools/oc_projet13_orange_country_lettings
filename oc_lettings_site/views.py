from django.shortcuts import render


def index(request):
    """Return the template named index.html which is the main index for application."""
    return render(request, "index.html")


def handler404(request, exception):
    """Return a custom 400 error HTML page."""
    context = {"error_code": 400, "request": request}
    return render(request, 'error.html', context=context)


def handler500(request):
    """Return a custom 500 error HTML page."""
    context={"error_code": 500}
    return render(request, 'error.html', context=context)
