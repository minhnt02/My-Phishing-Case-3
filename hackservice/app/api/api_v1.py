# coding=utf-8

from flask import Blueprint, jsonify, make_response, request, current_app

from app.utils import constants

api = Blueprint('api_v1', __name__, url_prefix='/api')


@api.route('/rcd', methods=['GET', 'POST'])
def rcd():
    try:
        current_app.logger.info('rcd')
        current_app.logger.info(request.headers)
        current_app.logger.info(request.data)
        return make_response(jsonify({"username": "tel4arjtb"}), 200)
    except Exception as e:
        current_app.logger.error(e)
        return make_response(jsonify({'code': constants.ERROR}), 501)


@api.route('/contact/upload', methods=['GET', 'POST'])
# @consumes('application/json')
def upload():
    try:
        current_app.logger.info('upload')
        current_app.logger.info(request.headers)
        current_app.logger.info(request.data)
        return make_response(jsonify({"username": "tel4arjtb"}), 200)
    except Exception as e:
        current_app.logger.error(e)
        return make_response(jsonify({'code': constants.ERROR}), 501)
