Feature: sign up failure

  I can't sign in

  Scenario: [signupFailure#1] signup fails on empty email
    Given a visitor on the register page
    And signup form is valid
    When he empties email field
    Then he should be prompted "Le champ \"Email\" est obligatoire" under Email field

  Scenario: [signupFailure#2] signup fails on empty fn
    Given a visitor on the register page
    And signup form is valid
    When he empties fn field
    Then he should be prompted "Le champ \"Prénom\" est obligatoire" under Name field

  Scenario: [signupFailure#3] signup fails on empty ln
    Given a visitor on the register page
    And signup form is valid
    When he empties ln field
    Then he should be prompted "Le champ \"Nom\" est obligatoire" under Name field

  Scenario: [signupFailure#4] signup fails on invalid password
    Given a visitor on the register page
    And signup form is valid
    When he changes password to an invalid format
    Then he should be prompted "Merci de saisir un mot de passe valide." under password field
    
    
