from config import app, jwt
from controllers.auth_controllers import auth_bp
from controllers.user_controllers import user_bp
from controllers.student_controllers import student_bp
from controllers.pair_controllers import pair_bp
from flask import make_response, jsonify
from models import User, TokenBlocklist
from flask_restful import Api, Resource

api = Api(app)


# !register blueprints
app.register_blueprint(auth_bp, url_prefix="/auth")
app.register_blueprint(user_bp, url_prefix="/api")
app.register_blueprint(student_bp, url_prefix="/api")
app.register_blueprint(pair_bp, url_prefix="/api")


class Index(Resource):
    def get(self):
        return "Welcome to Moringa Pair API", 200


api.add_resource(Index, "/")
# !JWT STUFF

# jwt error handling == expired, invalid, missing tokens


@jwt.expired_token_loader
def expired_token_callback(jwt_header, jwt_data):
    return make_response(jsonify({"message": "Token has expired", "error": "token_expired"}), 401)


@jwt.invalid_token_loader
def invalid_token_callback(error):
    return make_response(jsonify({"message": "Signature verification failed", "error": "token_invalid"}), 401)


@jwt.unauthorized_loader
def missing_token_callback(error):
    return make_response(jsonify({"message": "Request does not contain valid token", "error": "authorization_header"}), 401)


# automatic user loading
@jwt.user_lookup_loader
def user_lookup_callback(jwt_header, jwt_data):
    # access subject => similar to get_jwt()["sub"]
    identity = jwt_data["sub"]

    # access user of identity jwt_data["sub"]
    return User.query.filter_by(username=identity).one_or_none()


# handling revoking access/refresh tokens
@jwt.token_in_blocklist_loader
def token_in_blocklist_callback(jwt_header, jwt_data):
    # similar to get_jwt()["jti"]
    jti = jwt_data["jti"]

    # check if jti already in TokenBlocklist
    token = TokenBlocklist.query.filter_by(jti=jti).first()

    # True => has been revoked
    # False => can still be used for access
    return True if token else False


if __name__ == "__main__":
    app.run(port=5555, debug=True)
