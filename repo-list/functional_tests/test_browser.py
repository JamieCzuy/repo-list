from selenium import webdriver
from selenium.common.exceptions import ElementNotVisibleException
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.support.wait import WebDriverWait


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
