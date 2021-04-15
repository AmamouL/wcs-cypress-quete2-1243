import { When, Then, Before, And } from "cypress-cucumber-preprocessor/steps";
import { registerDom } from "../../../domElements/register";

const url = "https://preprod.backmarket.fr/register";
const passInput = registerDom.login.passInput;
const submitLoginBtn = registerDom.login.submitBtn;
const emailInput = registerDom.login.emailInput;
const invalidEmailPrompt = registerDom.login.invalidEmailPrompt;
const invalidCredentialsPrompt = registerDom.login.invalidCredentialsPrompt;

And("email is not valid", () => {
    cy.get(emailInput).type("wrongMail");
});
And("password is valid", () => {
    cy.get(passInput).type("Every3sr!ght4");
});
When("he logs in", () => {
    cy.get(submitLoginBtn).click();
});
Then("he should not be able to log in", () => {
    cy.url().should("eq", url);
});
And("he should be prompted {string}", (text) => {
    cy.get(invalidCredentialPrompt).should("contain.text", text);
});
