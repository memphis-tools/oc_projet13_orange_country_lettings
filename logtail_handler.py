from logtail import LogtailHandler
import logging
from oc_lettings_site import settings


handler = LogtailHandler(source_token=f"{settings.BETTERSTACK_SOURCE_TOKEN}")
logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)
logger.handlers = []
logger.addHandler(handler)
