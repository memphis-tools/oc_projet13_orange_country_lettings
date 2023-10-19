import os
import re
import json
import requests
import socket
import urllib3
from datetime import datetime


LOCAL_IP = socket.gethostname()
PATTERN = 'id="all-good"'
TIMESTAMP = datetime.today().strftime("%Y-%m-%d %h:%M:%S.%s")
DATAS = ''
urllib3.disable_warnings()

with open("./flake8_rapport/index.html", "r") as fd:
    DATAS = fd.readlines()

is_good = re.search(PATTERN, str(DATAS))

try:
    if is_good.group():
        pass
except Exception:
    message = f"{LOCAL_IP} sent warning - Lint has to be done"
    url = 'https://in.logs.betterstack.com'
    betterstack_token = os.getenv('BETTERSTACK_SOURCE_TOKEN')
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {betterstack_token}"
    }
    body = {"dt": f"{TIMESTAMP} [oc_projet13_orange_country_lettings]", "message": message}
    x = requests.post(
        url,
        data=json.dumps(body),
        headers=headers,
        verify=False
    )
    print(f"Lint error logged")
