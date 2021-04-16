Feature: Sign up

  Background: 
    Given a visitor on the register page

  Scenario: [signupFailure#1] signup fails on empty email
    And signup form is valid
    When he empties email field
    Then he should be prompted "Le champ \"Email\" est obligatoire" under Email field

  Scenario: [signupFailure#2] signup fails on empty fn
    And signup form is valid
    When he empties fn field
    Then he should be prompted "Le champ \"Prénom\" est obligatoire" under Name field

  Scenario: [signupFailure#3] signup fails on empty ln
    And signup form is valid
    When he empties ln field
    Then he should be prompted "Le champ \"Nom\" est obligatoire" under Name field

  Scenario: [signupFailure#4] signup fails on invalid password
    And signup form is valid
    When he changes password to an invalid format
    Then he should be prompted "Merci de saisir un mot de passe valide." under password field

  Scenario: [signupFailure#5] signup fails on taken email
    And signup form is valid
    And Email is already used
    When he signs up
    Then he should be prompted "Un utilisateur avec cette adresse email existe déjà" under Email field
@focus 
  Scenario: [signupSuccess#1] signup is successfull
    And signup form is valid with new user
    When he signs up
    Then he should be signed up
    
