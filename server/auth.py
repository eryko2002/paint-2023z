# Plik auth.py

from dotenv import load_dotenv
import os


def get_password():
    load_dotenv(".auth")
    return os.getenv("PASSWORD")
