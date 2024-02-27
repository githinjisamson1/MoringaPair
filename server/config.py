from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from dotenv import load_dotenv
from os import environ
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_marshmallow import Marshmallow
from flask_cors import CORS

# load environment variables => in .env
load_dotenv()

app = Flask(__name__)
db = SQLAlchemy()

# app configurations
app.secret_key = environ.get("SECRET_KEY")
app.config["SQLALCHEMY_DATABASE_URI"] = environ.get("DATABASE_URI")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = environ.get(
    "SQLALCHEMY_TRACK_MODIFICATIONS")
app.config["SQLALCHEMY_ECHO"] = environ.get("SQLALCHEMY_ECHO")
app.config["JWT_SECRET_KEY"] = environ.get("JWT_SECRET_KEY")
app.json.compact = False

# instantiations
migrate = Migrate(app, db)
db.init_app(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
ma = Marshmallow(app)

# prevent cross-origin issues
CORS(app)
