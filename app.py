from app.config import configuration
from app import init_app

configuration = configuration['development']
app = init_app(configuration)

if __name__ == '__main__':
    app.run()
