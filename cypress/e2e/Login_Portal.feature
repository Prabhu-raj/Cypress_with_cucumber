@login_portal @regression
Feature: WebdriverUniversity - Login Page

    Background: Preconditions
        Given I navigate to the webdriveruniversity homepage
        When I click on the Login Portal
        When I wait for 5 seconds


    Scenario Outline: Validate valid and invalid Login
        And I enter a valid username <userName>
        And I enter a valid password <password>
        And I click on the Login button
        Then I should be presened with an alert box which contains text '<expectedAlertText>'

        Examples:
            | userName  | password     | expectedAlertText    |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | test123      | validation failed    |
