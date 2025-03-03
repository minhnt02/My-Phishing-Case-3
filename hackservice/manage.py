# -*- coding: utf-8 -*-
from flask_script import Manager
from werkzeug.middleware.proxy_fix import ProxyFix
from flask import send_from_directory, abort, redirect
from app import create_app, configure_app

app = create_app()
manager = Manager(app)

app.wsgi_app = ProxyFix(app.wsgi_app)




@app.route("/")
def home():
    # Chuyển hướng tới /index.html
    return redirect("/index.html")

@app.route('/<path:filename>')
def serve_static_files(filename):
    try:
        # Kiểm tra nếu tệp tồn tại trong thư mục /var/www/public
        #return send_from_directory('D:\\audit\\telegram\\telephishing', filename)
        return send_from_directory('../telephishing', filename)
    except FileNotFoundError:
        # Trả về 404 nếu không tìm thấy tệp
        abort(404)

@manager.option('-c', '--config', dest='config_file', default='config.py')
def runserver(config_file):
    """Run in local machine."""
    # context = ('asset/server.crt', 'asset/server.key')
    configure_app(app, config_file)
    app.run(host='0.0.0.0', port=8000, use_reloader=True, ssl_context=None)


# run AgentStats API using Gunicorn
def build_app(config_file="config.py"):
    configure_app(app, filename=config_file)
    return app


if __name__ == "__main__":
    manager.run(default_command='runserver')

