import re
import logtail_handler
import socket


LOGGER = logtail_handler.logger
LOCAL_IP = socket.gethostbyname(socket.gethostname())
PATTERN='id="all-good"'


is_good = re.search(PATTERN, str(datas))
if not is_good.group():
    message = "Warning - Lint has to be done"
    LOGGER.error(message)
