*** Settings ***
Library  Browser
Variables  ./../testConfig.py

*** Variables ***
${TEST_RUNS}    ${10}
${env_test_runs} =    Get Environment Variable    TEST_RUNS    default=10
${TEST_RUNS} =    Convert To Integer    ${env_test_runs}

*** Test Cases ***
SauceDemo Checkout Test
    FOR    ${i}    IN RANGE    ${TEST_RUNS}
        Log To Console    Running test #${i + 1}
        New Browser    browser=chrome    headless=True
        New Page    ${testConfig["url"]}
        Fill Text    ${testConfig["selectors"]["usernameField"]}    ${testConfig["username"]}
        Fill Text    ${testConfig["selectors"]["passwordField"]}    ${testConfig["password"]}
        Click    ${testConfig["selectors"]["loginButton"]}
        Wait For Elements State    ${testConfig["selectors"]["inventoryList"]}    visible
        Click    ${testConfig["selectors"]["firstItemButton"]}
        Click    ${testConfig["selectors"]["cartLink"]}
        Click    ${testConfig["selectors"]["checkoutButton"]}
        Fill Text    ${testConfig["selectors"]["firstNameField"]}    ${testConfig["firstName"]}
        Fill Text    ${testConfig["selectors"]["lastNameField"]}    ${testConfig["lastName"]}
        Fill Text    ${testConfig["selectors"]["postalCodeField"]}    ${testConfig["postalCode"]}
        Click    ${testConfig["selectors"]["continueButton"]}
        Click    ${testConfig["selectors"]["finishButton"]}
        ${success} =    Get Text    ${testConfig["selectors"]["completeHeader"]}
        Should Be Equal    ${success}    Thank you for your order!
        Close Browser
    END
