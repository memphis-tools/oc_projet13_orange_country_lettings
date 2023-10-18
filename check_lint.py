import os
import re
import requests
import socket


LOCAL_IP = socket.gethostbyname(socket.gethostname())
PATTERN = 'id="all-good"'
DATAS = ''


with open("flake8_rapport/index.html", "r") as fd:
    DATAS = fd.readlines()

is_good = re.search(PATTERN, str(DATAS))

if not is_good.group():
    message = f"{LOCAL_IP} Warning - Lint has to be done"
    url = 'https://in.logs.betterstack.com'
    betterstack_token = os.getenv('BETTERSTACK_SOURCE_TOKEN')
    headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": f"Bearer {betterstack_token}"
    }
    body = {'message': message}
    requests.post(url, json = body)
