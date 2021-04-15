import { When, Then, Before, And } from "cypress-cucumber-preprocessor/steps";
import { registerDom } from "../../../domElements/register";

const fnInput = registerDom.signup.fnInput;
const lnInput = registerDom.signup.lnInput;

When("he empties ln field", () => {
    cy.get(lnInput).clear();
});

When("he empties fn field", () => {
    cy.get(fnInput).clear();
});

Then("he should be prompted {string} under Name field", (value) => {
    if(value.includes('Prénom')) {
        cy.get(fnInput).parentsUntil("[data-test=group]").next().find("li").should("contain.text", value);
        cy.get(fnInput).parent().should("have.class", "input-error");
    } else {
        cy.get(lnInput).parentsUntil("[data-test=group]").next().find("li").should("contain.text", value);
        cy.get(lnInput).parent().should("have.class", "input-error");
    }
});
