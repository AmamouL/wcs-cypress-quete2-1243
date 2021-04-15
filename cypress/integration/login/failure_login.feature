Feature: log in fail

  I can't log in

  Scenario: [loginFail#2] log in fails when Email is empty
    Given a visitor on the register page
    And password is valid
    And login email is empty
    When he logs in
    Then he should not be able to log in
    And he should be prompted "Le champ \"Email\" est obligatoire"
    And Email input field should turn to red


  Scenario: [loginFail#3] log in fails when invalid password
    Given a visitor on the register page
    And email is valid
    And password is not valid
    When he logs in
    Then he should not be able to log in
    And he should be prompted "Mauvaise combinaison email/mot de passe"

  Scenario: [loginFail#4] log in fails when invalid Email
    Given a visitor on the register page
    And email is not valid
    And password is valid
    When he logs in
    Then he should not be able to log in
    And he should be prompted "Mauvaise combinaison email/mot de passe"