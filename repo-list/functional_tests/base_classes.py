from unittest import TestCase

from test_browser import get_test_browser
from test_settings import get_test_settings


class FunctionalTestCase(TestCase):

    def setUp(self):
        self.setting = get_test_settings()
        self.browser = get_test_browser(self.setting)

    def tearDown(self):
        if self.browser and self.setting['close_browser_on_exit']:
            self.browser.quit()
