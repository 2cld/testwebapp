testwebapp fork acceptance
==========================

Feature: FA-001 - GooberU Subject Search
----------------------------------------

    As a GooberU Community User
    I want a GooberU-Portal subject search page
    So I can connect with a tutor

    Scenario: GooberU-Search Page
        Given I open the url "http://localhost:3000/"
        Then  I expect that the url is "http://localhost:3000/"
        And   I expect that the title is "GooberU App"
        And   I expect a request input with title "REQUEST A TUTOR"

   Scenario Outline: GooberU-Search 
       Given I open the url "<url>"
       Then  I expect that the url is "<url>"
       And   I expect that the title is "<title>"
       And   I expect a request input with placeholder "Your Request here..." 
       And   I expect that button "<button>" contains the text "<buttonText>"
       When  I type "<searchText>" into the request input
       And   I click the button "<button>" contains the text "<buttonText>"
       Then  I expect a GooberU map page with "<searchText>"

    Examples:
        | url | title | button | buttonText | searchText |
        | http://localhost:3000/  | GooberU App | div[class='ui huge white inverted button'] | Submit | Test Request |


Feature: FA-NNN - GooberU UX Portal Functional Acceptance Test Template
-----------------------------------------------------------------------

    As a GooberU Community User
    I want various GooberU-Portal UX pages for tasks
    So I learn and reuse a consistant UX for various GooberU-Portal tasks

    Scenario: GooberU-PortalCheck Hardcode
        Given I open the url "http://localhost:3000"
        Then  I expect that the url is "http://localhost:3000/"
        And   I expect that the title is "GooberU App"

   Scenario Outline: GooberU-PortalCheck tab Pages
       Given I open the url "<url>"
       Then  I expect that the url is "<url>"
       And   I expect that the title is "<title>"
       Then  I expect that button "<button>" contains the text "<buttonText>"

    Examples:
        | url | title | button | buttonText |
        | https://github.com/gooberu/testwebfeatures | GitHub - gooberu/testwebfeatures: Test Cucumber DSL for testwebapp | summary[class='btn btn-sm btn-primary'] | Clone or download |
        | http://localhost:3000/  | GooberU App | div[class='ui huge white inverted button'] | Goober yoUr Subject |
        | http://localhost:3000/subjects  | GooberU App | a[href='/subjects'] | Subjects |
        | http://localhost:3000/test  | GooberU App | button[class='ui teal button'] | Open Modal |
