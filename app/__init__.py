from flask import Flask
from .home import home_bp
from .toLain import lainContact

# Routes

app = Flask(__name__)

def init_app(config):
    # Configuration
    app.config.from_object(config)

    # Agregar URLS
    app.register_blueprint(home_bp)
    app.register_blueprint(lainContact)

    return app
