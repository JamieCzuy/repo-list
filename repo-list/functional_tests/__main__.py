import sys


def _get_command_line_options():
    options = {}
    for arg in sys.argv[1:]:
        if arg == '--fail_fast':
            options['fail_fast'] = True
    return options


def _get_test_file_patterns():
    cmd_line_patterns = []
    for arg in sys.argv[1:]:
        if not arg.startswith('--'):
            if '*' not in arg:
                arg = '*' + arg + '*'
            cmd_line_patterns.append(arg)
    if not cmd_line_patterns:
        return ['test*.py', '*tests.py']
    else:
        return cmd_line_patterns


if __name__ == '__main__':
    import os
    import unittest
    print('Functional Testing (v3.1.0):')
    options = _get_command_line_options()
    file_patterns = _get_test_file_patterns()
    test_loader = unittest.TestLoader()
    combined_suite = unittest.TestSuite()
    testing_root = os.path.dirname(__file__)
    for pattern in file_patterns:
        combined_suite.addTests(test_loader.discover(testing_root, pattern))
    print('')
    print('Test Results:')
    test_runner = unittest.TextTestRunner(failfast=options.get('fail_fast', False), verbosity=2)
    results = test_runner.run(combined_suite)
    exit_code = len(results.failures) > 0
    sys.exit(exit_code)
