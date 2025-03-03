# coding=utf-8

__author__ = 'edison'

import os
import re
import sys


# Lấy giá trị trong dict bằng key_name
# Nếu không có key_name thì trả về giá trị là default_value
def get_value_base(record_source, key_name, default_value=None):
    list_key = str(key_name).split(".")
    value = default_value

    for i in range(0, len(list_key)):
        key = list_key[i]
        if i == 0:
            try:
                value = record_source[key]
            except:
                return default_value
        else:
            try:
                value = value[key]
            except:
                return default_value

    return value


PARAM_STRING = 1
PARAM_NUMBER = 2
PARAM_LIST = 3
PARAM_JSON = 4
PARAM_BOOLEAN = 5

PARAM_USERNAME = 6
PARAM_PASSWORD = 7
PARAM_TOKEN = 8

PYTHON_VERSION_3 = sys.version_info[0] == 3
SCRIPT_DIRECTORY = os.path.dirname(os.path.realpath(__file__))
SCRIPT_NAME = os.path.basename(__file__)


def check_valid_param(value, type=None):
    """
    :param value:
    :param type: default is None that mean String.
    :return:
    """
    result = False

    # is string
    if not type or type == PARAM_STRING:
        return isinstance(value, str)

    # is number
    if type == PARAM_NUMBER:
        return isinstance(value, (int, float))

    # is list
    if type == PARAM_LIST:
        return isinstance(value, list)

    # is json
    if type == PARAM_JSON:
        return isinstance(value, dict)

    # is boolean
    if type == PARAM_BOOLEAN:
        return isinstance(value, bool)

    if type == PARAM_TOKEN:
        result = check_valid_param(value, type=PARAM_STRING)
        if not result:
            return False
        pattern = re.compile("^[a-zA-Z_0-9]{8,100}$")
        return (False, True)[pattern.match(value) is not None]

    return result


def check_valid_list_param(list_param):
    if not list_param or len(list_param) == 0:
        return True

    for param, type in list_param:
        result = check_valid_param(param, type)
        if not result:
            return False

    return True


html_escape_table = {
    "&": "&amp;",
    '"': "&quot;",
    "'": "&apos;",
    ">": "&gt;",
    "<": "&lt;",
}


def html_escape(text):
    return "".join(html_escape_table.get(c, c) for c in text)


def escape_data(value):
    if not value:
        return value

    value_type = check_valid_param(value, PARAM_STRING)
    if value_type:
        return html_escape(value)

    value_type = check_valid_param(value, PARAM_LIST)
    if value_type:
        len_data = len(value)
        for i in range(0, len_data):
            value_check = value[i]
            value[i] = escape_data(value_check)

    value_type = check_valid_param(value, PARAM_JSON)
    if value_type:
        for key in value:
            value_check = value[key]
            value[key] = escape_data(value_check)

    return value


def get_value(record_source, key_name, default_value=None):
    value = get_value_base(record_source, key_name, default_value)
    value = escape_data(value)
    return value
