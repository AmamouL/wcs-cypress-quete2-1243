import { When, Then, Before, And } from "cypress-cucumber-preprocessor/steps";
import { registerDom } from "../../../domElements/register";

const emailInput = registerDom.signup.emailInput;


When("he empties email field", () => {
    cy.get(emailInput).clear();
});

Then("he should be prompted {string} under Email field", (value) => {
    cy.get(emailInput).parent().next().find("li").should('contain.text', value)
    cy.get(emailInput).parent().should('have.class', 'input-error')
});
