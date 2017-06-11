import os


def _str2bool(v):
    return v.lower() in ("yes", "true", "t", "1")


def get_test_settings():
    settings = {}
    defaults = [
        ('BASE_URL', 'http://localhost:3000', str),
        ('close_browser_on_exit', True, bool),
        ('DRIVER', 'Chrome', str),
    ]

    for key, default_value, typ in defaults:
        if typ == bool:
            if key in os.environ:
                settings[key] = _str2bool(os.environ[key])
                print('Setting: {}'.format(settings[key]))
            else:
                settings[key] = default_value
        else:
            settings[key] = os.environ.get(key, default_value)

    return settings
