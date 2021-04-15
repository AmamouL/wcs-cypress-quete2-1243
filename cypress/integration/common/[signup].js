import { When, Then, Before, And } from "cypress-cucumber-preprocessor/steps";
import { registerDom } from "../../domElements/register";

const url = "https://preprod.backmarket.fr/register";
const passInput = registerDom.signup.passInput;
const submitBtn = registerDom.signup.submitBtn;
const emailInput = registerDom.signup.emailInput;
const fnInput = registerDom.signup.fnInput;
const lnInput = registerDom.signup.lnInput;
const invalidEmailPrompt = registerDom.signup.invalidEmailPrompt;
const invalidCredentialsPrompt = registerDom.signup.invalidCredentialsPrompt;

And("signup email is empty", () => {
    cy.get(emailInput).clear();
});
And("signup fn is empty", () => {
    cy.get(fnInput).clear();
});
And("signup ln is empty", () => {
    cy.get(lnInput).clear();
});
And("signup password is empty", () => {
    cy.get(passInpt).clear();
});

And("signup fn is not empty", () => {
    cy.get(fnInput).type('ballon');
});
And("signup ln is not empty", () => {
    cy.get(lnInput).type('ballon');
});

And("signup email is valid", () => {
    cy.get(emailInput).type('sk8terboi@free.fr');
});
And("signup password is valid", () => {
    cy.get(passInput).type('B@ckMark4t');
});

And("signup email is not valid", () => {
    cy.get(emailInput).type('wrongMail');
});
And("signup password is not valid", () => {
    cy.get(passInput).type('1234');
});

When("he signs up", () => {
    cy.get(submitBtn).click();
})

Then("he should not be able to sign up", () => {
    cy.url().should("eq", url);
});



