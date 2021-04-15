import { When, Then, Before, And, After } from "cypress-cucumber-preprocessor/steps";
import { registerDom } from "../../../domElements/register";

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