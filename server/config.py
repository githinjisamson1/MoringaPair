from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from dotenv import load_dotenv
from os import environ
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_mailman import Mail


# load environment variables => in .env
load_dotenv()

app = Flask(__name__)
db = SQLAlchemy()
mail = Mail()

# app configurations
app.config["SECRET_KEY"] = environ.get("SECRET_KEY")
app.config["SQLALCHEMY_DATABASE_URI"] = environ.get("DATABASE_URI")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = environ.get(
    "SQLALCHEMY_TRACK_MODIFICATIONS")
app.config["SQLALCHEMY_ECHO"] = environ.get("SQLALCHEMY_ECHO")
app.json.compact = False


# # configuration of mail
# app.config['MAIL_SERVER'] = 'smtp.gmail.com'
# app.config['MAIL_PORT'] = 465
# app.config['MAIL_USERNAME'] = environ.get("MAIL_USERNAME")
# app.config['MAIL_PASSWORD'] = environ.get("MAIL_PASSWORD")
# app.config['MAIL_USE_TLS'] = False
# app.config['MAIL_USE_SSL'] = True


# instantiations
migrate = Migrate(app, db)
db.init_app(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
ma = Marshmallow(app)
mail.init_app(app)

app.config["JWT_SECRET_KEY"] = "02a138bf67702b193876870e"

# prevent cross-origin issues
CORS(app)
