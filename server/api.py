from typing import Any
from flask import Blueprint, session, redirect, url_for, request
from server.filmy import lista_filmow
from server.auth import get_password

api = Blueprint("api", __name__, url_prefix="/api")

# Przykładowa baza danych filmów
movies = {
    1: {
        "id": 1,
        "title": "Incepcja",
        "director": "Christopher Nolan",
        "year": 2010,
        "description": "Film o podróżowaniu przez sny.",
    },
    2: {
        "id": 2,
        "title": "Interstellar",
        "director": "Christopher Nolan",
        "year": 2014,
        "description": "Film o podróży kosmicznej.",
    },
    # ... inne filmy ...
}


@api.route("/home", methods=["GET"])
def home() -> Any:
    return [
        {
            "plakat": "...",
            "tytuł": "...",
            "typ": "...",
            "minimalny wiek": "...",
            "czas trwania": "...",
            "produkcja": "...",
            "dostępne godziny seansów": "...",
        },
        {
            "plakat": "...",
            "tytuł": "...",
            "typ": "...",
            "minimalny wiek": "...",
            "czas trwania": "...",
            "produkcja": "...",
            "dostępne godziny seansów": "...",
        },
    ]


@api.route("/repertuar", methods=["GET"])
def repertuar() -> Any:
    return redirect(url_for("api.home"))


@api.route("/cennik", methods=["GET"])
def cennik() -> Any:
    return {
        "ulgowy 2d": 10,
        "normalny 2d": 10,
        "ulgowy 3d": 10,
        "normalny 3d": 10,
    }


@api.route("/film/<int:id>", methods=["GET"])
def film(id: int) -> Any:
    return {
        "plakat": "...",
        "tytuł": "...",
        "typ": "...",
        "minimalny wiek": "...",
        "czas trwania": "...",
        "produkcja": "...",
        "dostępne godziny seansów": "...",
    }


@api.route("/seats", methods=["GET", "POST"])
def seats() -> Any:
    match request.method:
        case "GET":
            return [1, 2, 3, 4]
        case "POST":
            return [1, 2, 3, 4]


@api.route("/buyer-data", methods=["POST"])
def buyer_data() -> Any:
    data = {k: request.form.get(k) for k in ["imię", "nazwisko", "e-mail", "telefon"]}

    return {
        "success": True,
    }


@api.route("/payment", methods=["POST"])
def payment() -> Any:
    return {
        "success": True,
    }


@api.route("/login", methods=["POST"])
def login() -> Any:
    username, password = request.form["username"], request.form["password"]

    if session.get("user") is None and username == password == "dev":
        session["user"] = username
        return {"success": True}
    else:
        return {"success": False}


@api.route("/logout", methods=["POST"])
def logout() -> Any:
    if session.get("user") is not None in session:
        session["user"] = None
        return {"success": True}
    else:
        return {"success": False}


@api.route("/user/<int:id>", methods=["GET", "POST"])
def user(id: int) -> Any:
    match request.method:
        case "GET":
            return {
                "imię": "...",
                "nazwisko": "...",
                "lista kupionych biletów": "...",
                "e-mail": "...",
                "telefon-mail": "...",
            }
        case "POST":
            data = {
                k: request.form.get(k)
                for k in ["imię", "nazwisko", "e-mail", "telefon"]
            }


@api.route("/filmy", methods=["POST"])
def filmy() -> Any:
    data = {
        k: request.form.get(k)
        for k in [
            "plakat",
            "tytuł",
            "typ",
            "minimalny wiek",
            "czas trwania",
            "produkcja",
            "dostępne godziny seansów",
        ]
    }
    return {}


@api.route("/admin/add_movie", methods=["POST"])
def add_movie() -> Any:
    new_movie = request.json  # Załóżmy, że przesyłane są dane w formacie JSON
    movie_id = max(movies.keys()) + 1
    new_movie["id"] = movie_id
    movies[movie_id] = new_movie
    return {"message": "Film został dodany pomyślnie"}


@api.route("/admin/update_movie/<int:id>", methods=["PUT"])
def update_movie(id: int) -> Any:
    if id not in movies:
        return {"message": f"Film o ID {id} nie istnieje"}

    updated_movie = request.json  # Nowe dane filmu
    movies[id].update(updated_movie)
    return {"message": f"Informacje o filmie {id} zostały zaktualizowane"}


@api.route("/admin/delete_movie/<int:id>", methods=["DELETE"])
def delete_movie(id: int) -> Any:
    if id not in movies:
        return {"message": f"Film o ID {id} nie istnieje"}

    del movies[id]
    return {"message": f"Film {id} został usunięty"}


@api.route("/movies", methods=["GET"])
def get_movies() -> Any:
    return {"movies": list(movies.values())}
