import { When, Then, Before, And, After } from "cypress-cucumber-preprocessor/steps";
import { registerDom } from "../../../domElements/register";

const url = "https://preprod.backmarket.fr/register";
const passInput = registerDom.signup.passInput;
const emailInput = registerDom.signup.emailInput;
const fnInput = registerDom.signup.fnInput;
const lnInput = registerDom.signup.lnInput;
const submitBtn = registerDom.signup.submitBtn;

When("he signs up", () => {
    cy.get(submitBtn).click()
});

Then("he should be signed up", () => {
    cy.wait(1000)
    cy.url().should('contain','https://preprod.backmarket.fr/dashboard')
});

After(()=> {
    cy.clearCookies('sessionid');
})