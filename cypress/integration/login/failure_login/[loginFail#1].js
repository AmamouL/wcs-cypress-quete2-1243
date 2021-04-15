import { When, Then, Before, And } from "cypress-cucumber-preprocessor/steps";
import { registerDom } from "../../../domElements/register";

const url = "https://preprod.backmarket.fr/register";
const passInput = registerDom.login.passInput;
const submitLoginBtn = registerDom.login.submitBtn;
const emailInput = registerDom.login.emailInput;
const invalidEmailPrompt = registerDom.login.invalidEmailPrompt;
const invalidCredentialsPrompt = registerDom.login.invalidCredentialsPrompt;

    And("login password is empty", () => {
        cy.get(passInput).clear();
    });
    When("he logs in", () => {
        cy.get(submitLoginBtn).click()
    });
    Then("he should not be able to log in", () => {
       cy.url().should('eq', url)
    });
