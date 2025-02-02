from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Enable cross-origin requests

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'your_secret_key'  # Change this for production

db = SQLAlchemy(app)
jwt = JWTManager(app)

# Register blueprints
from routes.auth import auth_bp
from routes.health import health_bp

app.register_blueprint(auth_bp, url_prefix="/auth")
app.register_blueprint(health_bp, url_prefix="/health")

if __name__ == '__main__':
    db.create_all()  # Create database tables
    app.run(debug=True)
