from flask_jwt_extended.exceptions import NoAuthorizationError
import flask_jwt_extended
from flask import redirect

def jwt_or_login(fn):
    def wrapper(*args, **kwargs):
        flask_jwt_extended.verify_jwt_in_request(optional=True)
        if not flask_jwt_extended.get_jwt_identity():
            return redirect('/login', code=302)
        else:
            return fn(*args, **kwargs)
    return wrapper