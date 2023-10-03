from django.shortcuts import render
import logtail_handler
import socket


LOGGER = logtail_handler.logger
LOCAL_IP = socket.gethostbyname(socket.gethostname())


def index(request):
    """Return the template named index.html which is the main index for application."""
    try:
        return render(request, "index.html")
    except Exception:
        message = "Erreur - Page 'index.html' non trouvée"
        LOGGER.error(message)


def handler404(request, exception):
    """Return a custom 400 error HTML page."""
    context = {"error_code": 400, "request": request, "user_ip": LOCAL_IP}
    LOGGER.error(context)
    return render(request, 'error.html', context=context)


def handler500(request):
    """Return a custom 500 error HTML page."""
    context = {"error_code": 500, "request": request, "user_ip": LOCAL_IP}
    LOGGER.error(context)
    return render(request, 'error.html', context=context)
