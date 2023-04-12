from dotenv import load_dotenv
load_dotenv()
from flask import Flask, request, make_response, redirect
from flask_restful import Api
import flask_jwt_extended
from flask_cors import CORS
from flask import render_template
import os
from models import db, User, ApiNavigator
from views import initialize_routes
import decorators
import flask_jwt_extended


app = Flask(__name__)
cors = CORS(app, 
    resources={r"/api/*": {"origins": '*'}}, 
    supports_credentials=True
)

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DB_URL')
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False    

app.config["JWT_SECRET_KEY"] = os.environ.get('JWT_SECRET')
app.config["JWT_TOKEN_LOCATION"] = ["headers", "cookies"]
app.config["JWT_COOKIE_SECURE"] = False

# https://github.com/vimalloc/flask-jwt-extended/issues/308
app.config['PROPAGATE_EXCEPTIONS'] = True 
jwt = flask_jwt_extended.JWTManager(app)


db.init_app(app)
api = Api(app)

# TODO: Deprecate old code for hard-coding the logged in user (User #12).
with app.app_context():
    app.current_user = User.query.filter_by(id=12).one()

# TODO: replace the hard-coded user #12 code (above) with this code, which
# figures out who is logged into the system based on the JWT.
@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    # print('JWT data:', jwt_data)
    # https://flask-jwt-extended.readthedocs.io/en/stable/automatic_user_loading/
    user_id = jwt_data["sub"]
    print('user_id =', user_id)
    user = User.query.get(user_id)
    app.current_user = user
    return user


# Initialize routes for all of your API endpoints:
initialize_routes(api)

# Server-side template for the homepage:
@app.route('/')
@decorators.jwt_or_login
def home():
    return render_template(
        'home.html', 
        user=flask_jwt_extended.current_user
    )

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        user = User.query.filter_by(username=username).first()
        if user is None:
            # the user was not found on the database
            return render_template(
                'login.html', 
                message='Invalid username'
            )
        if user.check_password(password):
            # create a new token with the user id inside
            print('It worked!')
            access_token = flask_jwt_extended.create_access_token(identity=user.id)
            resp = make_response(redirect('/', 302))
            flask_jwt_extended.set_access_cookies(resp, access_token)
            return resp
        else:
            return render_template(
                'login.html', 
                message='Invalid password'
            )
    else:
        return render_template(
            'login.html'
        )


@app.route('/api')
@app.route('/api/')
#@decorators.jwt_or_login
def api_docs():
    access_token = request.cookies.get('access_token_cookie')
    csrf = request.cookies.get('csrf_access_token')
    navigator = ApiNavigator(flask_jwt_extended.current_user)
    return render_template(
        'api/api-docs.html', 
        user=flask_jwt_extended.current_user,
        endpoints=navigator.get_endpoints(),
        access_token=access_token,
        csrf=csrf,
        url_root=request.url_root[0:-1] # trim trailing slash
    )


# enables flask app to run using "python3 app.py"
if __name__ == '__main__':
    app.run()
