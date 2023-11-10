Search.setIndex({"docnames": ["admin", "bdd", "cloner", "code_review_lettings", "code_review_oc_lettings_site", "code_review_profiles", "deploiement", "deploy_conteneuriser", "deploy_images_on_dockerhub", "deploy_logcollect", "deploy_on_render", "deploy_pipeline", "developpement", "envvars", "index", "lint", "local_exec_no_docker", "local_exec_with_docker", "prerequis", "test", "venv"], "filenames": ["admin.rst", "bdd.rst", "cloner.rst", "code_review_lettings.rst", "code_review_oc_lettings_site.rst", "code_review_profiles.rst", "deploiement.rst", "deploy_conteneuriser.rst", "deploy_images_on_dockerhub.rst", "deploy_logcollect.rst", "deploy_on_render.rst", "deploy_pipeline.rst", "developpement.rst", "envvars.rst", "index.rst", "lint.rst", "local_exec_no_docker.rst", "local_exec_with_docker.rst", "prerequis.rst", "test.rst", "venv.rst"], "titles": ["Panel d\u2019administration", "Base de donn\u00e9es", "Cloner le repository", "Exploration code, app lettings", "Exploration code, app OC lettings site", "Exploration code, app profiles", "D\u00e9ploiement", "Conteneurisation de l\u2019application", "D\u00e9ploiement images Docker, sur DockerHub", "Exploitation de logs", "D\u00e9ploiement application en ligne", "Construction d\u2019un pipeline de test, de build et de publication", "D\u00e9veloppement local", "Mettre \u00e0 jour les variables d\u2019environnement", "Bienvenue sur la documentation du projet", "Linting", "Ex\u00e9cuter le site, en local, sans Docker", "Ex\u00e9cuter le site, en local, avec Docker", "Pr\u00e9requis", "Tests unitaires", "Cr\u00e9er l\u2019environnement virtuel"], "terms": {"aller": [0, 16], "url": [0, 9], "suiv": [0, 1, 10, 13, 17], "dan": [0, 1, 7, 8, 11, 13, 16, 17, 18, 20], "cas": [0, 3, 5, 17], "test": [0, 6, 12, 14, 18], "local": [0, 6, 7, 8, 10, 13, 14, 18], "http": [0, 2, 14, 16], "localhost": [0, 13, 16], "8000": [0, 16], "admin": 0, "connect": [0, 1, 18], "utilis": [0, 1, 7, 8, 12], "mot": 0, "pass": 0, "abc1234": 0, "cd": [1, 2, 8, 13, 15, 16, 17, 19, 20], "oc_projet13_orange_country_letting": [1, 2, 8, 13, 15, 16, 17, 19], "sourc": [1, 3, 5, 13, 15, 16, 19, 20], "venv": [1, 15, 16, 19, 20], "b": [1, 19], "in": [1, 2, 3, 5, 19], "activat": [1, 15, 16, 19, 20], "ouvr": 1, "session": 1, "shel": [1, 18], "sqlite3": [1, 18], "Se": 1, "open": 1, "oc": [1, 14, 20], "letting": [1, 20], "sit": [1, 12, 14], "affich": 1, "tabl": [1, 3, 5], "colon": 1, "tableau": 1, "profil": [1, 14, 16], "pragm": 1, "table_info": 1, "python": [1, 7, 14, 16, 18, 19, 20], "fr_profil": 1, "lanc": [1, 7], "requ\u00eat": 1, "select": 1, "user_id": 1, "favorite_city": 1, "from": [1, 3, 5], "wher": 1, "lik": 1, "quitt": 1, "quit": 1, "La": 1, "principal": 1, "not": [1, 3, 5, 13, 17], "model": 1, "class": [1, 3, 5], "user": [1, 5], "natif": 1, "django": [1, 5, 7, 14], "sqlit": 1, "lettings_address": 1, "0": [1, 13], "id": [1, 3, 5], "integ": 1, "1": [1, 3, 5, 7, 13], "numb": [1, 3], "unsigned": 1, "2": [1, 3, 7, 13, 17], "street": 1, "varchar": 1, "64": 1, "3": [1, 18, 20], "city": 1, "4": 1, "stat": 1, "5": 1, "zip_cod": 1, "6": [1, 18, 20], "country_iso_cod": 1, "lettings_letting": 1, "titl": [1, 3], "256": 1, "address_id": 1, "profiles_profil": 1, "path": [2, 8, 12, 13, 20], "to": [2, 3, 5, 20], "put": 2, "project": 2, "git": [2, 18], "github": [2, 18], "com": [2, 14], "memph": 2, "tool": 2, "address": 3, "arg": [3, 5], "kwarg": [3, 5], "set": [3, 5], "several": [3, 5], "attribut": [3, 5], "which": [3, 5, 12, 20], "represent": [3, 5], "an": [3, 5], "object": [3, 5], "the": [3, 5], "__str__": [3, 5], "method": [3, 5], "return": [3, 5], "a": [3, 5, 9, 10], "string": [3, 5], "based": [3, 5], "and": [3, 5], "except": [3, 5], "doesnotexist": [3, 5], "multipleobjectsreturned": [3, 5], "bas": [3, 5, 12, 14], "objectdoesnotexist": [3, 5], "with_traceback": [3, 5], "tb": [3, 5], "self": [3, 5], "__traceback__": [3, 5], "classmethod": [3, 5], "_check_field_name_clash": [3, 5], "forbid": [3, 5], "field": [3, 5], "shadowing": [3, 5], "mult": [3, 5], "inherit": [3, 5], "_check_field": [3, 5], "perform": [3, 5], "all": [3, 5], "check": [3, 5], "_check_id_field": [3, 5], "if": [3, 5], "is": [3, 5], "primary": [3, 5], "key": [3, 5], "_check_index_togeth": [3, 5], "valu": [3, 5], "of": [3, 5], "index_togeth": [3, 5], "option": [3, 5], "_check_index": [3, 5], "databas": [3, 5], "nam": [3, 5], "condit": [3, 5], "index": [3, 4, 5], "_check_long_column_nam": [3, 5], "that": [3, 5], "any": [3, 5], "auto": [3, 5], "generated": [3, 5], "column": [3, 5], "are": [3, 5], "short": [3, 5], "than": [3, 5], "limit": [3, 5], "for": [3, 5], "each": [3, 5], "will": [3, 5], "be": [3, 5], "created": [3, 5], "_check_m2m_through_same_relationship": [3, 5], "no": [3, 5], "relationship": [3, 5], "used": [3, 5], "by": [3, 5], "mor": [3, 5], "one": [3, 5], "m2m": [3, 5], "_check_manager": [3, 5], "manag": [3, 5, 16], "_check_ordering": [3, 5], "ordering": [3, 5], "it": [3, 5], "list": [3, 5], "do": [3, 5], "exist": [3, 5], "_check_swapp": [3, 5], "swapped": [3, 5], "_check_unique_togeth": [3, 5], "unique_togeth": [3, 5], "_do_insert": [3, 5], "using": [3, 5], "returning_field": [3, 5], "raw": [3, 5], "insert": [3, 5], "defined": [3, 5], "then": [3, 5], "this": [3, 5], "should": [3, 5], "newly": [3, 5], "dat": [3, 5], "_do_updat": [3, 5], "base_q": [3, 5], "pk_val": [3, 5], "update_field": [3, 5], "forced_updat": [3, 5], "try": [3, 5], "updat": [3, 5], "tru": [3, 5], "was": [3, 5], "updated": [3, 5], "query": [3, 5], "don": [3, 5, 12, 14], "matching": [3, 5], "row": [3, 5], "found": [3, 5], "db": [3, 5], "_get_unique_check": [3, 5], "exclud": [3, 5], "non": [3, 5, 20], "sinc": [3, 5], "validate_un": [3, 5], "could": [3, 5], "called": [3, 5], "modelform": [3, 5], "som": [3, 5], "may": [3, 5], "hav": [3, 5], "been": [3, 5], "excluded": [3, 5], "we": [3, 5], "can": [3, 5], "uniqu": [3, 5, 7], "missing": [3, 5], "involved": [3, 5], "did": [3, 5], "validat": [3, 5], "also": [3, 5], "but": [3, 5], "they": [3, 5], "need": [3, 5], "passed": [3, 5], "vi": [3, 5, 11], "argument": [3, 5, 10], "_save_parent": [3, 5], "cl": [3, 5], "sav": [3, 5], "parent": [3, 5], "_save_t": [3, 5], "fals": [3, 5], "force_insert": [3, 5], "force_updat": [3, 5], "heavy": [3, 5], "lifting": [3, 5], "saving": [3, 5], "or": [3, 5], "singl": [3, 5], "clean": [3, 5], "hook": [3, 5], "doing": [3, 5], "extra": [3, 5], "wid": [3, 5], "valid": [3, 5, 18], "after": [3, 5], "has": [3, 5], "every": [3, 5], "clean_field": [3, 5], "validationerror": [3, 5], "raised": [3, 5], "associated": [3, 5], "with": [3, 5], "particular": [3, 5], "special": [3, 5], "associ": [3, 5], "non_field_error": [3, 5], "rais": [3, 5], "containing": [3, 5], "dict": [3, 5], "error": [3, 5], "occur": [3, 5], "full_clean": [3, 5], "call": [3, 5], "get_deferred_field": [3, 5], "deferred": [3, 5], "instanc": [3, 5], "refresh_from_db": [3, 5], "reload": [3, 5], "default": [3, 5], "reloading": [3, 5], "happen": [3, 5], "loaded": [3, 5], "read": [3, 5], "rout": [3, 5], "wasn": [3, 5], "paramet": [3, 5], "overrid": [3, 5], "specify": [3, 5], "iter": [3, 5], "attnam": [3, 5], "reloaded": [3, 5], "when": [3, 5], "accessing": [3, 5], "loading": [3, 5], "current": [3, 5], "subclass": [3, 5], "you": [3, 5], "want": [3, 5], "control": [3, 5], "process": [3, 5], "parameter": [3, 5], "insist": [3, 5], "must": [3, 5], "sql": [3, 5], "equivalent": [3, 5], "backend": [3, 5], "respectively": [3, 5], "normally": [3, 5], "save_bas": [3, 5], "handl": [3, 5], "part": [3, 5, 11], "only": [3, 5], "once": [3, 5], "per": [3, 5], "yet": [3, 5], "too": [3, 5], "includ": [3, 5], "sanity": [3, 5], "signal": [3, 5], "sending": [3, 5], "telling": [3, 5], "chang": [3, 5], "befor": [3, 5], "fixtur": [3, 5], "serializable_valu": [3, 5], "field_nam": [3, 5], "foreign": [3, 5], "instead": [3, 5], "ther": [3, 5], "serializ": [3, 5], "form": [3, 5, 7, 10], "output": [3, 5], "exampl": [3, 5], "would": [3, 5], "just": [3, 5], "access": [3, 5], "directly": [3, 5], "use": [3, 5], "constraint": [3, 5], "failed": [3, 5], "view": 3, "oc_lettings_sit": 4, "handler404": 4, "handler500": 4, "relat": 5, "between": 5, "usernam": 5, "Cette": 6, "section": [6, 13, 18], "\u00e9voqu": 6, "imag": [6, 7, 11, 13, 14, 17, 18], "dock": [6, 7, 10, 11, 12, 13, 14, 18], "appliqu": [6, 11, 14, 17], "lign": [6, 11, 14], "chez": 6, "cloud": [6, 7, 10, 18], "provid": 6, "Les": [6, 11], "pr\u00e9requ": [6, 14], "rejoignent": 6, "ceux": 6, "d\u00e9velopp": [6, 8, 14, 18], "conteneuris": [6, 14], "dockerhub": [6, 11, 14, 18], "construct": [6, 14], "pipelin": [6, 10, 14], "build": [6, 7, 8, 10, 14, 17], "publiqu": [6, 14, 17], "exploit": [6, 14], "log": [6, 14, 18], "L": 7, "arborescent": 7, "projet": [7, 10], "adapt": [7, 8, 13, 17], "basiqu": 7, "context": 7, "similair": 7, "celui": 7, "pr\u00e9sent": 7, "servic": 7, "suppl\u00e9mentair": 7, "introduit": 7, "gunicorn": 7, "nginx": 7, "va": [7, 8, 11, 17], "serv": 7, "contenu": [7, 13], "d\u00e9livr": [7, 14], "occurent": 7, "cod": [7, 14], "global": 7, "revers": 7, "proxy": 7, "tout": [7, 8, 9, 10, 11], "fichi": [7, 8, 11, 13], "statiqu": [7, 14], "css": 7, "js": 7, "etc": 7, "On": [7, 8, 13, 17], "aur": [7, 8, 10], "conteneur": [7, 17], "chaqu": 7, "Ils": 7, "orchestr": 7, "compos": [7, 8, 10, 17], "san": [7, 11, 12, 14], "autr": [7, 11], "Un": 7, "dev": [7, 10, 17], "yml": [7, 11], "lor": 7, "phas": 7, "second": 7, "prod": 7, "phsas": 7, "ex\u00e9cu": [7, 13, 17], "script": [7, 8, 17], "permet": 7, "d\u00e9ploi": [7, 13, 14, 18], "deployment": [7, 8, 10, 17], "sh": [7, 8, 10, 17], "d\u00e9p\u00f4t": [8, 11, 13, 18], "g\u00e9ner": [8, 11], "afin": 8, "simplifi": 8, "illustr": 8, "comm": [8, 10, 12], "usag": [8, 10, 17], "command": [8, 10, 12, 17, 18, 20], "cr\u00e9": [8, 12, 13, 14], "envrc": [8, 13], "tel": 8, "d\u00e9clar": [8, 11, 13], "Vous": [8, 17], "ajout": [8, 13], "votr": [8, 18], "cour": [8, 13], "variabl": [8, 12, 14], "ex\u00e9cut": [8, 10, 12, 14, 18, 20], "format": [8, 11, 17], "bash": [8, 17], "Sur": [8, 17], "window": [8, 17], "faudr": [8, 17], "jou": [8, 17], "seul": [8, 10, 11, 13, 17, 18], "n\u00e9cessair": [8, 13, 17, 18], "down": [8, 17], "publish": [8, 11], "Le": [9, 10], "choix": [9, 10], "fait": [9, 10], "collect": [9, 18], "betterstack": [9, 18], "sais": 9, "incorrect": 9, "ser": 9, "exempl": 9, "logu": 9, "sous": 10, "plateform": 10, "rend": [10, 11, 18], "branch": [10, 11], "mast": [10, 11], "effet": 10, "red\u00e9ploi": [10, 11], "Pour": [10, 11, 12, 17, 20], "inform": 10, "appel": 10, "Par": 10, "bi": 10, "webhook": 10, "depuis": 10, "derni": 10, "\u00e9tap": [10, 20], "re": 10, "publi": [10, 11, 13], "En": 11, "tant": 11, "d\u00e9veloppeur": [11, 14], "travaill": 11, "cl\u00f4n": 11, "v\u00e9rifi": 11, "action": 11, "effectu": 11, "automatis": 11, "mis": [11, 18], "plac": 11, "circlec": 11, "Il": [11, 14], "agit": [11, 14], "processus": 11, "r\u00e9alis": 11, "pr\u00e9convenu": 11, "config": 11, "consistent": 11, "contr\u00f4l": 11, "lint": 11, "jour": [11, 12, 14, 18], "provoqu": 11, "development": 11, "republ": 11, "clon": [12, 14], "repository": [12, 14, 18], "environ": [12, 14, 18], "virtuel": [12, 14, 18], "mettr": [12, 14], "linting": [12, 14], "unitair": [12, 14], "d\u00e9couvert": 12, "structur": 12, "panel": [12, 14], "administr": [12, 14], "powershel": 12, "ci": [12, 18], "dessus": [12, 18], "sauf": 12, "activ": [12, 18, 20], "venvscriptsactivat": 12, "ps1": 12, "remplac": 12, "my": 12, "get": [12, 20], "met": 13, "identifi": 13, "export": 13, "betterstack_source_token": 13, "supertokenfrombetterstack": 13, "coveralls_repo_token": 13, "supertokenfromcoverall": 13, "secret_key": 13, "makeyourownsecretkey": 13, "django_allowed_host": 13, "127": 13, "debug": 13, "docker_hub_us": 13, "yourdockerhubus": 13, "docker_hub_password": 13, "yourdockerhubpassword": 13, "nb": 13, "docker_hub_": 13, "optionnel": 13, "propr": 13, "ver": 13, "voir": [13, 16, 18], "logg": 13, "logtail_handl": 13, "py": [13, 16], "fictiv": 14, "apprentissag": 14, "openclassroom": 14, "C": 14, "projet13": 14, "cycl": 14, "organ": 14, "explor": 14, "app": 14, "bin": [15, 16, 20], "oc_projet13": [15, 16, 19], "flake8": 15, "pip": [16, 20], "install": [16, 17, 20], "requir": 16, "txt": 16, "runserv": 16, "navig": 16, "confirm": [16, 20], "fonction": 16, "possibl": 16, "navigu": 16, "devr": 16, "plusieur": 16, "locat": 16, "avoir": 17, "podman": 17, "premi": 17, "o\u00f9": 17, "d\u00e9j\u00e0": 17, "initialis": 17, "run": [17, 19], "arr\u00eat": 17, "remarqu": 17, "pouv": 17, "t\u00e9l\u00e9charg": 17, "selon": 17, "version": [17, 18, 20], "os": [17, 18], "pull": 17, "io": 17, "memphistool": 17, "public_repo": 17, "oc_projet13_orange_country_lettings_web": 17, "oc_projet13_orange_country_lettings_nginx": 17, "connexion": 18, "internet": 18, "compt": 18, "acces": 18, "lectur": 18, "api": 18, "token": 18, "concern": 18, "coverall": 18, "taux": 18, "couvertur": 18, "d\u00e9pos": 18, "si": [18, 20], "souhait": 18, "blueprint": 18, "cli": 18, "interpr\u00e9teur": [18, 20], "sup\u00e9rieur": [18, 20], "rest": 18, "document": 18, "suppos": 18, "moin": 18, "coverag": 19, "pytest": 19, "fr": 20, "apt": 20, "python3": 20, "pr\u00e9c\u00e9dent": 20, "comport": 20, "erreur": 20, "paquet": 20, "trouv": 20, "ubuntu": 20, "d\u00e9sactiv": 20, "deactivat": 20}, "objects": {"lettings.models": [[3, 0, 1, "", "Address"], [3, 0, 1, "", "Letting"]], "lettings.models.Address": [[3, 1, 1, "", "DoesNotExist"], [3, 1, 1, "", "MultipleObjectsReturned"], [3, 2, 1, "", "_check_field_name_clashes"], [3, 2, 1, "", "_check_fields"], [3, 2, 1, "", "_check_id_field"], [3, 2, 1, "", "_check_index_together"], [3, 2, 1, "", "_check_indexes"], [3, 2, 1, "", "_check_long_column_names"], [3, 2, 1, "", "_check_m2m_through_same_relationship"], [3, 2, 1, "", "_check_managers"], [3, 2, 1, "", "_check_ordering"], [3, 2, 1, "", "_check_swappable"], [3, 2, 1, "", "_check_unique_together"], [3, 2, 1, "", "_do_insert"], [3, 2, 1, "", "_do_update"], [3, 2, 1, "", "_get_unique_checks"], [3, 2, 1, "", "_save_parents"], [3, 2, 1, "", "_save_table"], [3, 2, 1, "", "clean"], [3, 2, 1, "", "clean_fields"], [3, 2, 1, "", "full_clean"], [3, 2, 1, "", "get_deferred_fields"], [3, 2, 1, "", "refresh_from_db"], [3, 2, 1, "", "save"], [3, 2, 1, "", "save_base"], [3, 2, 1, "", "serializable_value"], [3, 2, 1, "", "validate_unique"]], "lettings.models.Address.DoesNotExist": [[3, 2, 1, "", "with_traceback"]], "lettings.models.Address.MultipleObjectsReturned": [[3, 2, 1, "", "with_traceback"]], "lettings.models.Letting": [[3, 1, 1, "", "DoesNotExist"], [3, 1, 1, "", "MultipleObjectsReturned"], [3, 2, 1, "", "_check_field_name_clashes"], [3, 2, 1, "", "_check_fields"], [3, 2, 1, "", "_check_id_field"], [3, 2, 1, "", "_check_index_together"], [3, 2, 1, "", "_check_indexes"], [3, 2, 1, "", "_check_long_column_names"], [3, 2, 1, "", "_check_m2m_through_same_relationship"], [3, 2, 1, "", "_check_managers"], [3, 2, 1, "", "_check_ordering"], [3, 2, 1, "", "_check_swappable"], [3, 2, 1, "", "_check_unique_together"], [3, 2, 1, "", "_do_insert"], [3, 2, 1, "", "_do_update"], [3, 2, 1, "", "_get_unique_checks"], [3, 2, 1, "", "_save_parents"], [3, 2, 1, "", "_save_table"], [3, 2, 1, "", "clean"], [3, 2, 1, "", "clean_fields"], [3, 2, 1, "", "full_clean"], [3, 2, 1, "", "get_deferred_fields"], [3, 2, 1, "", "refresh_from_db"], [3, 2, 1, "", "save"], [3, 2, 1, "", "save_base"], [3, 2, 1, "", "serializable_value"], [3, 2, 1, "", "validate_unique"]], "lettings.models.Letting.DoesNotExist": [[3, 2, 1, "", "with_traceback"]], "lettings.models.Letting.MultipleObjectsReturned": [[3, 2, 1, "", "with_traceback"]], "lettings.views": [[3, 3, 1, "", "index"], [3, 3, 1, "", "letting"]], "profiles.models": [[5, 0, 1, "", "Profile"]], "profiles.models.Profile": [[5, 1, 1, "", "DoesNotExist"], [5, 1, 1, "", "MultipleObjectsReturned"], [5, 2, 1, "", "_check_field_name_clashes"], [5, 2, 1, "", "_check_fields"], [5, 2, 1, "", "_check_id_field"], [5, 2, 1, "", "_check_index_together"], [5, 2, 1, "", "_check_indexes"], [5, 2, 1, "", "_check_long_column_names"], [5, 2, 1, "", "_check_m2m_through_same_relationship"], [5, 2, 1, "", "_check_managers"], [5, 2, 1, "", "_check_ordering"], [5, 2, 1, "", "_check_swappable"], [5, 2, 1, "", "_check_unique_together"], [5, 2, 1, "", "_do_insert"], [5, 2, 1, "", "_do_update"], [5, 2, 1, "", "_get_unique_checks"], [5, 2, 1, "", "_save_parents"], [5, 2, 1, "", "_save_table"], [5, 2, 1, "", "clean"], [5, 2, 1, "", "clean_fields"], [5, 2, 1, "", "full_clean"], [5, 2, 1, "", "get_deferred_fields"], [5, 2, 1, "", "refresh_from_db"], [5, 2, 1, "", "save"], [5, 2, 1, "", "save_base"], [5, 2, 1, "", "serializable_value"], [5, 2, 1, "", "validate_unique"]], "profiles.models.Profile.DoesNotExist": [[5, 2, 1, "", "with_traceback"]], "profiles.models.Profile.MultipleObjectsReturned": [[5, 2, 1, "", "with_traceback"]], "profiles.views": [[5, 3, 1, "", "index"], [5, 3, 1, "", "profile"]]}, "objtypes": {"0": "py:class", "1": "py:exception", "2": "py:method", "3": "py:function"}, "objnames": {"0": ["py", "class", "Python classe"], "1": ["py", "exception", "Python exception"], "2": ["py", "method", "Python m\u00e9thode"], "3": ["py", "function", "Python fonction"]}, "titleterms": {"panel": 0, "administr": 0, "bas": 1, "don": 1, "d\u00e9couvert": 1, "structur": 1, "clon": 2, "repository": 2, "explor": [3, 4, 5], "cod": [3, 4, 5], "app": [3, 4, 5], "letting": [3, 4, 14], "model": [3, 5], "oc": 4, "sit": [4, 16, 17], "view": [4, 5], "profil": 5, "d\u00e9ploi": [6, 8, 10], "conteneuris": 7, "appliqu": [7, 10], "imag": 8, "dock": [8, 16, 17], "dockerhub": 8, "exploit": 9, "log": 9, "lign": 10, "construct": 11, "pipelin": 11, "test": [11, 19], "build": 11, "publiqu": 11, "d\u00e9velopp": 12, "local": [12, 16, 17], "macos": 12, "linux": 12, "window": 12, "mettr": 13, "jour": 13, "variabl": 13, "environ": [13, 20], "bienvenu": 14, "document": 14, "projet": 14, "appli": 14, "web": 14, "orang": 14, "county": 14, "index": 14, "linting": 15, "ex\u00e9cut": [16, 17], "san": 16, "pr\u00e9requ": 18, "unitair": 19, "cr\u00e9": 20, "virtuel": 20}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.viewcode": 1, "sphinx": 60}, "alltitles": {"Panel d\u2019administration": [[0, "panel-d-administration"]], "Base de donn\u00e9es": [[1, "base-de-donnees"]], "D\u00e9couverte": [[1, "decouverte"]], "Structure base de donn\u00e9es": [[1, "structure-base-de-donnees"]], "Cloner le repository": [[2, "cloner-le-repository"]], "Exploration code, app lettings": [[3, "exploration-code-app-lettings"]], "Lettings Models": [[3, "lettings-models"]], "Lettings": [[3, "lettings"]], "Exploration code, app OC lettings site": [[4, "exploration-code-app-oc-lettings-site"]], "OC Lettings Site Views": [[4, "oc-lettings-site-views"]], "Exploration code, app profiles": [[5, "exploration-code-app-profiles"]], "Profiles Models": [[5, "profiles-models"]], "Profiles Views": [[5, "profiles-views"]], "D\u00e9ploiement": [[6, "deploiement"]], "Conteneurisation de l\u2019application": [[7, "conteneurisation-de-l-application"]], "D\u00e9ploiement images Docker, sur DockerHub": [[8, "deploiement-images-docker-sur-dockerhub"]], "Exploitation de logs": [[9, "exploitation-de-logs"]], "D\u00e9ploiement application en ligne": [[10, "deploiement-application-en-ligne"]], "Construction d\u2019un pipeline de test, de build et de publication": [[11, "construction-d-un-pipeline-de-test-de-build-et-de-publication"]], "D\u00e9veloppement local": [[12, "developpement-local"]], "macOS / Linux": [[12, "macos-linux"]], "Windows": [[12, "windows"]], "Mettre \u00e0 jour les variables d\u2019environnement": [[13, "mettre-a-jour-les-variables-d-environnement"]], "Bienvenue sur la documentation du projet": [[14, "bienvenue-sur-la-documentation-du-projet"]], "Appli web Orange County Lettings": [[14, "appli-web-orange-county-lettings"]], "Index": [[14, null]], "Linting": [[15, "linting"]], "Ex\u00e9cuter le site, en local, sans Docker": [[16, "executer-le-site-en-local-sans-docker"]], "Ex\u00e9cuter le site, en local, avec Docker": [[17, "executer-le-site-en-local-avec-docker"]], "Pr\u00e9requis": [[18, "prerequis"]], "Tests unitaires": [[19, "tests-unitaires"]], "Cr\u00e9er l\u2019environnement virtuel": [[20, "creer-l-environnement-virtuel"]]}, "indexentries": {"address (classe dans lettings.models)": [[3, "lettings.models.Address"]], "address.doesnotexist": [[3, "lettings.models.Address.DoesNotExist"]], "address.multipleobjectsreturned": [[3, "lettings.models.Address.MultipleObjectsReturned"]], "letting (classe dans lettings.models)": [[3, "lettings.models.Letting"]], "letting.doesnotexist": [[3, "lettings.models.Letting.DoesNotExist"]], "letting.multipleobjectsreturned": [[3, "lettings.models.Letting.MultipleObjectsReturned"]], "_check_field_name_clashes() (m\u00e9thode de la classe lettings.models.address)": [[3, "lettings.models.Address._check_field_name_clashes"]], "_check_field_name_clashes() (m\u00e9thode de la classe lettings.models.letting)": [[3, "lettings.models.Letting._check_field_name_clashes"]], "_check_fields() (m\u00e9thode de la classe lettings.models.address)": [[3, "lettings.models.Address._check_fields"]], "_check_fields() (m\u00e9thode de la classe lettings.models.letting)": [[3, "lettings.models.Letting._check_fields"]], "_check_id_field() (m\u00e9thode de la classe lettings.models.address)": [[3, "lettings.models.Address._check_id_field"]], "_check_id_field() (m\u00e9thode de la classe lettings.models.letting)": [[3, "lettings.models.Letting._check_id_field"]], "_check_index_together() (m\u00e9thode de la classe lettings.models.address)": [[3, "lettings.models.Address._check_index_together"]], "_check_index_together() (m\u00e9thode de la classe lettings.models.letting)": [[3, "lettings.models.Letting._check_index_together"]], "_check_indexes() (m\u00e9thode de la classe lettings.models.address)": [[3, "lettings.models.Address._check_indexes"]], "_check_indexes() (m\u00e9thode de la classe lettings.models.letting)": [[3, "lettings.models.Letting._check_indexes"]], "_check_long_column_names() (m\u00e9thode de la classe lettings.models.address)": [[3, "lettings.models.Address._check_long_column_names"]], "_check_long_column_names() (m\u00e9thode de la classe lettings.models.letting)": [[3, "lettings.models.Letting._check_long_column_names"]], "_check_m2m_through_same_relationship() (m\u00e9thode de la classe lettings.models.address)": [[3, "lettings.models.Address._check_m2m_through_same_relationship"]], "_check_m2m_through_same_relationship() (m\u00e9thode de la classe lettings.models.letting)": [[3, "lettings.models.Letting._check_m2m_through_same_relationship"]], "_check_managers() (m\u00e9thode de la classe lettings.models.address)": [[3, "lettings.models.Address._check_managers"]], "_check_managers() (m\u00e9thode de la classe lettings.models.letting)": [[3, "lettings.models.Letting._check_managers"]], "_check_ordering() (m\u00e9thode de la classe lettings.models.address)": [[3, "lettings.models.Address._check_ordering"]], "_check_ordering() (m\u00e9thode de la classe lettings.models.letting)": [[3, "lettings.models.Letting._check_ordering"]], "_check_swappable() (m\u00e9thode de la classe lettings.models.address)": [[3, "lettings.models.Address._check_swappable"]], "_check_swappable() (m\u00e9thode de la classe lettings.models.letting)": [[3, "lettings.models.Letting._check_swappable"]], "_check_unique_together() (m\u00e9thode de la classe lettings.models.address)": [[3, "lettings.models.Address._check_unique_together"]], "_check_unique_together() (m\u00e9thode de la classe lettings.models.letting)": [[3, "lettings.models.Letting._check_unique_together"]], "_do_insert() (m\u00e9thode lettings.models.address)": [[3, "lettings.models.Address._do_insert"]], "_do_insert() (m\u00e9thode lettings.models.letting)": [[3, "lettings.models.Letting._do_insert"]], "_do_update() (m\u00e9thode lettings.models.address)": [[3, "lettings.models.Address._do_update"]], "_do_update() (m\u00e9thode lettings.models.letting)": [[3, "lettings.models.Letting._do_update"]], "_get_unique_checks() (m\u00e9thode lettings.models.address)": [[3, "lettings.models.Address._get_unique_checks"]], "_get_unique_checks() (m\u00e9thode lettings.models.letting)": [[3, "lettings.models.Letting._get_unique_checks"]], "_save_parents() (m\u00e9thode lettings.models.address)": [[3, "lettings.models.Address._save_parents"]], "_save_parents() (m\u00e9thode lettings.models.letting)": [[3, "lettings.models.Letting._save_parents"]], "_save_table() (m\u00e9thode lettings.models.address)": [[3, "lettings.models.Address._save_table"]], "_save_table() (m\u00e9thode lettings.models.letting)": [[3, "lettings.models.Letting._save_table"]], "clean() (m\u00e9thode lettings.models.address)": [[3, "lettings.models.Address.clean"]], "clean() (m\u00e9thode lettings.models.letting)": [[3, "lettings.models.Letting.clean"]], "clean_fields() (m\u00e9thode lettings.models.address)": [[3, "lettings.models.Address.clean_fields"]], "clean_fields() (m\u00e9thode lettings.models.letting)": [[3, "lettings.models.Letting.clean_fields"]], "full_clean() (m\u00e9thode lettings.models.address)": [[3, "lettings.models.Address.full_clean"]], "full_clean() (m\u00e9thode lettings.models.letting)": [[3, "lettings.models.Letting.full_clean"]], "get_deferred_fields() (m\u00e9thode lettings.models.address)": [[3, "lettings.models.Address.get_deferred_fields"]], "get_deferred_fields() (m\u00e9thode lettings.models.letting)": [[3, "lettings.models.Letting.get_deferred_fields"]], "index() (dans le module lettings.views)": [[3, "lettings.views.index"]], "letting() (dans le module lettings.views)": [[3, "lettings.views.letting"]], "refresh_from_db() (m\u00e9thode lettings.models.address)": [[3, "lettings.models.Address.refresh_from_db"]], "refresh_from_db() (m\u00e9thode lettings.models.letting)": [[3, "lettings.models.Letting.refresh_from_db"]], "save() (m\u00e9thode lettings.models.address)": [[3, "lettings.models.Address.save"]], "save() (m\u00e9thode lettings.models.letting)": [[3, "lettings.models.Letting.save"]], "save_base() (m\u00e9thode lettings.models.address)": [[3, "lettings.models.Address.save_base"]], "save_base() (m\u00e9thode lettings.models.letting)": [[3, "lettings.models.Letting.save_base"]], "serializable_value() (m\u00e9thode lettings.models.address)": [[3, "lettings.models.Address.serializable_value"]], "serializable_value() (m\u00e9thode lettings.models.letting)": [[3, "lettings.models.Letting.serializable_value"]], "validate_unique() (m\u00e9thode lettings.models.address)": [[3, "lettings.models.Address.validate_unique"]], "validate_unique() (m\u00e9thode lettings.models.letting)": [[3, "lettings.models.Letting.validate_unique"]], "with_traceback() (m\u00e9thode lettings.models.address.doesnotexist)": [[3, "lettings.models.Address.DoesNotExist.with_traceback"]], "with_traceback() (m\u00e9thode lettings.models.address.multipleobjectsreturned)": [[3, "lettings.models.Address.MultipleObjectsReturned.with_traceback"]], "with_traceback() (m\u00e9thode lettings.models.letting.doesnotexist)": [[3, "lettings.models.Letting.DoesNotExist.with_traceback"]], "with_traceback() (m\u00e9thode lettings.models.letting.multipleobjectsreturned)": [[3, "lettings.models.Letting.MultipleObjectsReturned.with_traceback"]], "profile (classe dans profiles.models)": [[5, "profiles.models.Profile"]], "profile.doesnotexist": [[5, "profiles.models.Profile.DoesNotExist"]], "profile.multipleobjectsreturned": [[5, "profiles.models.Profile.MultipleObjectsReturned"]], "_check_field_name_clashes() (m\u00e9thode de la classe profiles.models.profile)": [[5, "profiles.models.Profile._check_field_name_clashes"]], "_check_fields() (m\u00e9thode de la classe profiles.models.profile)": [[5, "profiles.models.Profile._check_fields"]], "_check_id_field() (m\u00e9thode de la classe profiles.models.profile)": [[5, "profiles.models.Profile._check_id_field"]], "_check_index_together() (m\u00e9thode de la classe profiles.models.profile)": [[5, "profiles.models.Profile._check_index_together"]], "_check_indexes() (m\u00e9thode de la classe profiles.models.profile)": [[5, "profiles.models.Profile._check_indexes"]], "_check_long_column_names() (m\u00e9thode de la classe profiles.models.profile)": [[5, "profiles.models.Profile._check_long_column_names"]], "_check_m2m_through_same_relationship() (m\u00e9thode de la classe profiles.models.profile)": [[5, "profiles.models.Profile._check_m2m_through_same_relationship"]], "_check_managers() (m\u00e9thode de la classe profiles.models.profile)": [[5, "profiles.models.Profile._check_managers"]], "_check_ordering() (m\u00e9thode de la classe profiles.models.profile)": [[5, "profiles.models.Profile._check_ordering"]], "_check_swappable() (m\u00e9thode de la classe profiles.models.profile)": [[5, "profiles.models.Profile._check_swappable"]], "_check_unique_together() (m\u00e9thode de la classe profiles.models.profile)": [[5, "profiles.models.Profile._check_unique_together"]], "_do_insert() (m\u00e9thode profiles.models.profile)": [[5, "profiles.models.Profile._do_insert"]], "_do_update() (m\u00e9thode profiles.models.profile)": [[5, "profiles.models.Profile._do_update"]], "_get_unique_checks() (m\u00e9thode profiles.models.profile)": [[5, "profiles.models.Profile._get_unique_checks"]], "_save_parents() (m\u00e9thode profiles.models.profile)": [[5, "profiles.models.Profile._save_parents"]], "_save_table() (m\u00e9thode profiles.models.profile)": [[5, "profiles.models.Profile._save_table"]], "clean() (m\u00e9thode profiles.models.profile)": [[5, "profiles.models.Profile.clean"]], "clean_fields() (m\u00e9thode profiles.models.profile)": [[5, "profiles.models.Profile.clean_fields"]], "full_clean() (m\u00e9thode profiles.models.profile)": [[5, "profiles.models.Profile.full_clean"]], "get_deferred_fields() (m\u00e9thode profiles.models.profile)": [[5, "profiles.models.Profile.get_deferred_fields"]], "index() (dans le module profiles.views)": [[5, "profiles.views.index"]], "profile() (dans le module profiles.views)": [[5, "profiles.views.profile"]], "refresh_from_db() (m\u00e9thode profiles.models.profile)": [[5, "profiles.models.Profile.refresh_from_db"]], "save() (m\u00e9thode profiles.models.profile)": [[5, "profiles.models.Profile.save"]], "save_base() (m\u00e9thode profiles.models.profile)": [[5, "profiles.models.Profile.save_base"]], "serializable_value() (m\u00e9thode profiles.models.profile)": [[5, "profiles.models.Profile.serializable_value"]], "validate_unique() (m\u00e9thode profiles.models.profile)": [[5, "profiles.models.Profile.validate_unique"]], "with_traceback() (m\u00e9thode profiles.models.profile.doesnotexist)": [[5, "profiles.models.Profile.DoesNotExist.with_traceback"]], "with_traceback() (m\u00e9thode profiles.models.profile.multipleobjectsreturned)": [[5, "profiles.models.Profile.MultipleObjectsReturned.with_traceback"]]}})