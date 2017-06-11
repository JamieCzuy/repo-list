from base_classes import FunctionalTestCase


class TestCase(FunctionalTestCase):

    def test_01__app_is_running(self):
        self.browser.get(self.setting['BASE_URL'])
