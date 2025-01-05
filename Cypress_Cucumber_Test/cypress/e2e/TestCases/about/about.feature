Feature: Logout functionality

Scenario: Display About page
  Given I am logged in as a standard user for visit about page
  When I click the menu icon for display the side bar
  Then The sidebar should be display
  When I click the about button
  Then I should be navigated to the about page