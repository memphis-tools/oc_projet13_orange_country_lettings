import re
import logtail_handler
import socket


LOGGER = logtail_handler.logger
LOCAL_IP = socket.gethostbyname(socket.gethostname())
PATTERN = 'id="all-good"'
DATAS = ''


with open("flake8_rapport/index.html", "r") as fd:
    DATAS = fd.readlines()

is_good = re.search(PATTERN, str(DATAS))

if not is_good.group():
    message = f"{LOCAL_IP} Warning - Lint has to be done"
    LOGGER.error(message)
