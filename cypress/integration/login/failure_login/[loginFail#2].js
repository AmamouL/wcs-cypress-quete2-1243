import { When, Then, Before, And } from "cypress-cucumber-preprocessor/steps";
import { registerDom } from "../../../domElements/register";

const url = "https://preprod.backmarket.fr/register";
const passInput = registerDom.login.passInput;
const submitLoginBtn = registerDom.login.submitBtn;
const emailInput = registerDom.login.emailInput;
const invalidEmailPrompt = registerDom.login.invalidEmailPrompt;
const invalidCredentialsPrompt = registerDom.login.invalidCredentialsPrompt;


    And("password is valid", () => {
        cy.get(passInput).type('Every3sr!ght4');
    });
    And("login email is empty", () => {
        cy.get(emailInput).clear();
    });
    When("he logs in", () => {
        cy.get(submitLoginBtn).click()
    });
    Then("he should not be able to log in", () => {
        cy.url().should("eq", url);
    });
    And("he should be prompted {string}", (text) => {
        cy.get(invalidEmailPrompt).should('contain.text', text)
    })
    And("Email input field should turn to red", () => {
        cy.get(emailInput).parent().should('have.class', 'input-error')
    });
