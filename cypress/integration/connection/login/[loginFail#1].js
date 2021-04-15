let faker = require("faker");
import { When, Then, Before, And } from "cypress-cucumber-preprocessor/steps";
import { registerDom } from "../../../domElements/register";

const userPassword = faker.internet.password()

const url = "https://preprod.backmarket.fr/register";
const passInput = registerDom.login.passInput;
const submitLoginBtn = registerDom.login.submitBtn;
const emailInput = registerDom.login.emailInput;
const invalidEmailPrompt = registerDom.login.invalidEmailPrompt;

And("email is not valid", () => {
    cy.get(emailInput).type("wrongMail");
});
And("login password is valid", () => {
    cy.get(passInput).type(userPassword);
});
And("login email is empty", () => {
    cy.get(emailInput).clear();
});
When("he logs in", () => {
    cy.get(submitLoginBtn).click();
});
Then("he should not be able to log in", () => {
    cy.url().should("eq", url);
});
And("he should be prompted {string}", (text) => {
    cy.get(invalidEmailPrompt).should("contain.text", text);
});
And("login email input field should turn to red", () => {
    cy.get(emailInput).parent().should('have.class', 'input-error')
});
