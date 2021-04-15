import { When, Then, Before, And } from "cypress-cucumber-preprocessor/steps";
import { registerDom } from "../../domElements/register";

const url = "https://preprod.backmarket.fr/register";
const passInput = registerDom.signup.passInput;
const emailInput = registerDom.signup.emailInput;
const fnInput = registerDom.signup.fnInput;
const lnInput = registerDom.signup.lnInput;
const submitBtn = registerDom.signup.submitBtn;

And("signup form is valid", () => {
    cy.get(emailInput).type("sylvavio@gmail.com");
    cy.get(fnInput).type("Sylvain");
    cy.get(lnInput).type("Viole");
    cy.get(passInput).type("B@ck4arKet");
});

When("he empties email field", () => {
    cy.get(emailInput).clear();
});
When("he empties ln field", () => {
    cy.get(lnInput).clear();
});
When("he empties fn field", () => {
    cy.get(fnInput).clear();
});
When("he empties password field", () => {
    cy.get(passInput).clear();
});
