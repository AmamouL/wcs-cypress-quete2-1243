import { When, Then, Before, And } from "cypress-cucumber-preprocessor/steps";
import { registerDom } from "../../../domElements/register";

const url = "https://preprod.backmarket.fr/register";
const passInput = registerDom.signup.passInput;
const emailInput = registerDom.signup.emailInput;
const fnInput = registerDom.signup.fnInput;
const lnInput = registerDom.signup.lnInput;
const submitBtn = registerDom.signup.submitBtn;

When("he changes password to an invalid format",() => {
    cy.get(passInput).clear().find('input').focus().blur();
});

Then("he should be prompted {string} under password field", (value) => {
    cy.get("[data-test=list-item]").should("contain.text", value);
});
