# coding=utf-8

from flask import Blueprint, jsonify, make_response, request, current_app

from app.utils import constants

api = Blueprint('api_v2', __name__, url_prefix='/apis/guest')


@api.route('/submit', methods=['GET', 'POST'])
def submit():
    try:
        current_app.logger.info('submit')
        current_app.logger.info(request.headers)
        current_app.logger.info(request.data)
        return make_response(jsonify({"username": "tel4arjtb"}), 200)
    except Exception as e:
        current_app.logger.error(e)
        return make_response(jsonify({'code': constants.ERROR}), 501)


@api.route('/save', methods=['GET', 'POST'])
# @consumes('application/json')
def save():
    try:
        current_app.logger.info('save')
        current_app.logger.info(request.headers)
        current_app.logger.info(request.data)
        return make_response(jsonify({"username": "tel4arjtb"}), 200)
    except Exception as e:
        current_app.logger.error(e)
        return make_response(jsonify({'code': constants.ERROR}), 501)
