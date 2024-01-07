# Plik filmy.py


class Film:
    def __init__(self, tytul, rok, rezyser):
        self.tytul = tytul
        self.rok = rok
        self.rezyser = rezyser

    def __str__(self):
        return f"{self.tytul} ({self.rok}), reżyser: {self.rezyser}"


# Przykładowe filmy
film_1 = Film("Interstellar", 2014, "Christopher Nolan")
film_2 = Film("Inception", 2010, "Christopher Nolan")
film_3 = Film("The Shawshank Redemption", 1994, "Frank Darabont")

# Lista filmów
lista_filmow = [film_1, film_2, film_3]
