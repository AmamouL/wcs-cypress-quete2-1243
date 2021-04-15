import { When, Then, Before, And } from "cypress-cucumber-preprocessor/steps";
import { registerDom } from "../../../domElements/register";

const url = "https://preprod.backmarket.fr/register";
const passInput = registerDom.login.passInput;
const submitLoginBtn = registerDom.login.submitBtn;
const emailInput = registerDom.login.emailInput;
const invalidEmailPrompt = registerDom.login.invalidEmailPrompt;
const invalidCredentialsPrompt = registerDom.login.invalidCredentialsPrompt;

And("email is valid", () => {
    cy.get(emailInput).type("sk8terboi@free.fr");
});
And("password is not valid", () => {
    cy.get(passInput).type("1234");
});
When("he logs in", () => {
    cy.get(submitLoginBtn).click();
});
Then("he should not be able to log in", () => {
    cy.url().should("eq", url);
});
And("he should be prompted {string}", (text) => {
    cy.get(invalidCredentialsPrompt).should("contain.text", text);
});
