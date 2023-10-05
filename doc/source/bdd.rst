Base de données
===============

- `cd oc_projet13_orange_country_lettings/`

.. code-block:: console

  cd oc_projet13_orange_country_lettings/

  source venv/b-in/activate

- Ouvrir une session shell

.. code-block:: console

  sqlite3

- Se connecter à la base de données

.. code-block:: console

  .open oc-lettings-site.sqlite3

- Afficher les tables dans la base de données

.. code-block:: console

  .tables

- Afficher les colonnes dans le tableau des profils,

.. code-block:: console

  pragma table_info(Python-OC-Lettings-FR_profile);

- Lancer une requête sur la table des profils,

.. code-block:: console

  select user_id, favorite_city from Python-OC-Lettings-FR_profile where favorite_city like 'B%';

- quitter

.. code-block:: console

  .quit
