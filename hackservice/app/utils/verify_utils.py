import re

PARAM_STRING = 1
PARAM_NUMBER = 2
PARAM_LIST = 3
PARAM_JSON = 4
PARAM_BOOLEAN = 5

PARAM_USERNAME = 6
PARAM_PASSWORD = 7
PARAM_TOKEN = 8


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


def verify_phone_number(phone):
    if not check_valid_param(phone, PARAM_STRING):
        return False

    if len(phone) != 11:
        return False

    if not phone.startswith('84'):
        return False

    pattern = re.compile("^[0-9]{10,11}$")
    return (False, True)[pattern.match(phone) is not None]


def check(email):
    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    if re.fullmatch(regex, email):
        return True
    else:
        return False
