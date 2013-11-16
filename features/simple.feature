Feature: Simple addition
  As a user
  I want to add two numbers
  So that I can get the result

  Scenario: Add two numbers
    Given I want to add numbers
    When I enter "2" and "3"
    And I click compute
    Then the answer should be "5"

  Scenario: Add two bigger numbers
    Given I want to add numbers
    When I enter "10" and "50"
    And I click compute
    Then the answer should be "60"