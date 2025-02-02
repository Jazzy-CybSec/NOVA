import os

# Flask configuration
SQLALCHEMY_DATABASE_URI = 'sqlite:///db.sqlite'  # Change to PostgreSQL if needed
SQLALCHEMY_TRACK_MODIFICATIONS = False
JWT_SECRET_KEY = 'your_secret_key'  # Change this for production
