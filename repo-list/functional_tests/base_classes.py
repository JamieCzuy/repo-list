import os
from unittest import TestCase
from selenium import webdriver
from selenium.common.exceptions import ElementNotVisibleException
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.support.wait import WebDriverWait


class FunctionalTestCase(TestCase):

    def setUp(self):
        self.setting = get_test_settings()
        self.browser = get_test_browser(self.setting)

    def tearDown(self):
        if self.browser and self.setting['close_browser_on_exit']:
            self.browser.quit()


def get_test_browser(settings):
    driver = settings.get('DRIVER', 'chrome')
    if driver.lower() == 'chrome':
        options = webdriver.ChromeOptions()
        options.add_argument('disable-infobars')
        prefs = {'credentials_enable_service': False, 'profile.password_manager_enabled': False}
        options.add_experimental_option('prefs', prefs)
        browser = webdriver.Chrome(chrome_options=options)
    elif driver.lower() == 'phantom':
        browser = webdriver.PhantomJS()
    else:
        raise Exception(f'Unknown driver ({driver}) (must be one of: Phantom or Chrome)') #noqa

    # Add Wait Until
    # unreliable -> browser.implicitly_wait(10)
    wait = WebDriverWait(browser, 10)
    browser.wait_until = wait.until

    # browser.set_window_position(0, 0)
    browser.set_window_size(1280, 1024)
    return browser



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

