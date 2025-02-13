*** Settings ***
Library  Browser

*** Variables ***
${TEST_RUNS}    ${10}  # Default to 10
${env_test_runs} =    Get Environment Variable    TEST_RUNS    default=10
${TEST_RUNS} =    Convert To Integer    ${env_test_runs}

*** Test Cases ***
SauceDemo Checkout Test
    FOR    ${i}    IN RANGE    ${TEST_RUNS}
        Log To Console    Running test #${i + 1}
        New Browser    browser=chromium    headless=True
        New Page    https://www.saucedemo.com/
        Fill Text    id=user-name    standard_user
        Fill Text    id=password    secret_sauce
        Click    id=login-button
        Wait For Elements State    .inventory_list    visible
        Click    .inventory_item:first-child button
        Click    .shopping_cart_link
        Click    .checkout_button
        Fill Text    id=first-name    John
        Fill Text    id=last-name    Doe
        Fill Text    id=postal-code    12345
        Click    id=continue
        Click    id=finish
        ${success} =    Get Text    .complete-header
        Should Be Equal    ${success}    Thank you for your order!
        Close Browser
    END
