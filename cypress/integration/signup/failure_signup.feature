Feature: sign in failure

  I can't sign in
  

  Scenario: [signinFailure#1] signin fails empty mail
    Given a visitor on the home page
    And signup email is empty
    And signup fn is not empty
    And signup ln is not empty
    And signup password is valid
    When he signs up
    Then he should not be able to sign up
    
  Scenario: [signinFailure#2] signin fails empty firstname
    Given a visitor on the home page
    And signin email is valid
    And signin fn is empty
    And signin ln is valid
    And signin password is valid
    When he signs up
    Then he should not be able to sign in
    And he should be prompted "Le champ \"Prénom\" est obligatoire"
    
    
