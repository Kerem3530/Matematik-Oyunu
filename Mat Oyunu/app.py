from flask import Flask
from views import views

app = Flask(__name__)
app.register_blueprint(views, url_prefix = "/", static_url_path='/static')

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=4090)