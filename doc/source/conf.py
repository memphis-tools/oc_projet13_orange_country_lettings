# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html


# Path setup
import os
import sys
import django
import sphinx_rtd_theme


sys.path.insert(0, os.path.abspath("../../oc_projet13/"))
sys.path.insert(0, os.path.abspath(os.path.join("..", "..")))
os.environ["DJANGO_SETTINGS_MODULE"] = "oc_lettings_site.settings"
os.environ["DJANGO_ALLOWED_HOSTS"] = "localhost"
os.environ["SECRET_KEY"] = "bebopalula"
django.setup()

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'oc_projet13'
copyright = '2023, OpenClassRoomStudent'
author = 'openclassroom_student'
release = '05-10-2023'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'sphinx.ext.autosectionlabel',
    'sphinx.ext.duration',
    'sphinx.ext.doctest',
    'sphinx.ext.autodoc',
    "sphinx.ext.napoleon",
    "sphinx.ext.viewcode",
    "sphinx.ext.autosummary",
]

templates_path = ['_templates']
exclude_patterns = []
language = 'fr'
autosummary_generate = True

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output
html_theme = 'sphinx_rtd_theme'
html_static_path = []
#html_static_path = ['_static']
