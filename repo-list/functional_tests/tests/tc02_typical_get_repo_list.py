from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

from base_classes import FunctionalTestCase


class TestCase(FunctionalTestCase):

    def test_01__typical_get_repo_list(self):
        # Sally wants to see the Kenneth Reitz (kennethreitz) github repos

        # So she brings up the repo-list web site
        self.browser.get(self.setting['BASE_URL'])
        self.browser.wait_until(EC.title_contains('Repo-List'))

        # and sees a Welcome message and a place to enter the github username
        text = 'Welcome'
        self.browser.wait_until(EC.text_to_be_present_in_element((By.CSS_SELECTOR, 'body'), text))
        elt = self.browser.find_element_by_id('input_username')
        elt.send_keys('kennethreitz')

        # She enters "kennethreitz" and clicks the List Button
        ## Enter name
        ## Click button

        # And she sees a list of his githib repos (including requests)
        ## List exists
        ## "requests" repo is in the list

        self.fail('TBD')
