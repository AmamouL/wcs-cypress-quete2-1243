Feature: log in

  Scenario: [failLogin#1] log in fails when Email is empty
    Given a visitor on the register page
    And password is valid
    And login email is empty
    When he logs in
    Then he should not be able to log in
    And he should be prompted "Le champ \"Email\" est obligatoire"
    And Email input field should turn to red