import { When, Then, Before, And } from "cypress-cucumber-preprocessor/steps";
import { registerDom } from "../../../domElements/register";

const url = "https://preprod.backmarket.fr/register";
const passInput = registerDom.signup.passInput;
const emailInput = registerDom.signup.emailInput;
const fnInput = registerDom.signup.fnInput;
const lnInput = registerDom.signup.lnInput;
const submitBtn = registerDom.signup.submitBtn;

Then("he should be prompted {string} under Email field", (value) => {
    cy.get(emailInput).parent().next().find("li").should('contain.text', value)
    cy.get(emailInput).parent().should('have.class', 'input-error')
});
