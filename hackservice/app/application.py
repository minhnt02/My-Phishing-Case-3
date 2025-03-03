# -*- coding: utf-8 -*-
import logging
import os
import sys
from logging.handlers import RotatingFileHandler

from flask import Flask, jsonify
from werkzeug.exceptions import *

from app.api import api_v1, api_v2


# Import API module

def create_app():
    """
    Tạo một flask app.
    :return: Đối tượng flask app.
    """
    app = Flask(__name__)
    # Required Config
    app.secret_key = os.urandom(24)

    return app


def configure_app(app, filename):
    """
    config app
    :param app:
    :param filename:
    :param config_class:
    :return:
    """

    # load module config
    app.config.from_pyfile(filename)

    configure_extensions(app)
    configure_blueprints(app)
    configure_error_handlers(app)
    configure_log_handlers(app)


def configure_extensions(app):
    """
    Hàm config các extension.
    :param app: Đối tượng flask app.
    :return:
    """
    # flask-pymongo
    # mongo.init_app(app)
    # logmongo.init_app(app, config_prefix='MONGO_LOG')


def configure_blueprints(app):
    """
    Hàm khai báo các URL prefix.
    :param app: Đối tượng flask app.
    :return:
    """
    app.register_blueprint(api_v1.api)
    app.register_blueprint(api_v2.api)


def configure_log_handlers(app):
    """
    Hàm xử lý log.
    Log được lưu trong file app.log.
    :param app: Đối tượng flask app.
    :return:
    """
    log_filename = 'server_service.log'
    log_path = app.config['APP_LOG_PATH']
    if not log_path:
        current_file_path = os.path.abspath(__file__)
        log_dir = os.path.dirname(current_file_path)
        log_dir = os.path.dirname(log_dir)
    else:
        log_dir = log_path

    log_filename = os.path.join(log_dir, log_filename)

    formatter = logging.Formatter("[%(asctime)s] {%(name)s:%(lineno)d} %(levelname)s - %(message)s")
    handler_rotating_file = RotatingFileHandler(log_filename, maxBytes=100000000, backupCount=100)
    # handler_rotating_file.setLevel(logging.INFO)
    handler_rotating_file.setFormatter(formatter)
    handler_console = logging.StreamHandler(sys.stdout)

    LOG_LEVELS = {
        'debug': logging.DEBUG,
        'info': logging.INFO,
        'warning': logging.WARNING,
        'error': logging.ERROR,
        'critical': logging.CRITICAL,
    }
    LOG_LEVEL_NAME = 'debug'
    LOG_LEVEL = LOG_LEVELS.get(LOG_LEVEL_NAME, logging.NOTSET)
    app.logger.setLevel(LOG_LEVEL)

    app.logger.addHandler(handler_rotating_file)
    app.logger.addHandler(handler_console)
    app.logger.info('App log file: {0}'.format(log_filename))

    # specify log
    log_filename = 'server_service_specify_info.log'
    log_filename = os.path.join(log_dir, log_filename)

    formatter = logging.Formatter('[%(asctime)s] - %(name)s - %(levelname)s - %(message)s')
    # formatter = logging.Formatter("[%(asctime)s] {%(pathname)s:%(lineno)d} %(levelname)s - %(message)s")
    handler_rotating_file = RotatingFileHandler(log_filename, maxBytes=100000000, backupCount=100)
    # spec_handler_rotating_file.setLevel(logging.INFO)
    handler_rotating_file.setFormatter(formatter)
    handler_console = logging.StreamHandler(sys.stdout)

    LOG_LEVELS = {
        'debug': logging.DEBUG,
        'info': logging.INFO,
        'warning': logging.WARNING,
        'error': logging.ERROR,
        'critical': logging.CRITICAL,
    }
    LOG_LEVEL_NAME = 'debug'
    LOG_LEVEL = LOG_LEVELS.get(LOG_LEVEL_NAME, logging.NOTSET)
    app.spec_logger = logging.getLogger("SPECIFY_INFO")
    app.spec_logger.setLevel(LOG_LEVEL)

    app.spec_logger.addHandler(handler_rotating_file)
    app.spec_logger.addHandler(handler_console)
    app.spec_logger.info('App log file: {0}'.format(log_filename))


def configure_error_handlers(app):
    """
    Hàm xử lý error code.
    :param app: Đối tượng flask app.
    :return:
    """

    @app.errorhandler(400)
    def bad_request(error):
        app.logger.debug(error)
        app.logger.debug(error.description)
        if type(error.description) == dict:
            return jsonify(error=error.description), 400
        else:
            return jsonify(error={'code': 400, 'message': 'Bad Request.'}), 400

    @app.errorhandler(401)
    def unauthorized_request(error):
        app.logger.debug(error)
        app.logger.debug(error.description)
        if type(error.description) == dict:
            return jsonify(error=error.description), 401
        else:
            return jsonify(error={'code': 401, 'message': 'Unauthorized Request.'}), 401

    @app.errorhandler(404)
    def request_not_found(error):
        app.logger.debug(error)
        app.logger.debug(error.description)
        if type(error.description) == dict:
            return jsonify(error=error.description), 404
        else:
            return jsonify(error={'code': 404, 'message': 'The requested URL was not found on the server.'}), 404

    @app.errorhandler(405)
    def request_not_found(error):
        app.logger.debug(error)
        app.logger.debug(error.description)
        if type(error.description) == dict:
            return jsonify(error=error.description), 405
        else:
            return jsonify(error={'code': 405, 'message': 'The method is not allowed for the requested URL.'}), 405

    @app.errorhandler(415)
    def request_not_support_type(error):
        app.logger.debug(error)
        app.logger.debug(error.description)
        if type(error.description) == dict:
            return jsonify(error=error.description), 415
        else:
            return jsonify(error={'code': 415,
                                  'message': 'The server does not support the media type transmitted in the request.'}), 415

    @app.errorhandler(UnsupportedMediaType)
    def request_not_support_type_by_exception(error):
        app.logger.debug(error)
        app.logger.debug(error.description)
        if type(error.description) == dict:
            return jsonify(error=error.description), 415
        else:
            return jsonify(error={'code': 415,
                                  'message': 'The server does not support the media type transmitted in the request.'}), 415

    @app.errorhandler(Exception)
    def default_exception(error):
        app.logger.debug(error)
        app.logger.exception(error)
        if error.message != '':
            return jsonify(error={'code': 500, 'message': error.message}), 500
        else:
            return jsonify(error={'code': 500, 'message': 'Internal Error.'}), 500
