import { When, Then, Before, And } from "cypress-cucumber-preprocessor/steps";
import { registerDom } from "../../../domElements/register";

const url = "https://preprod.backmarket.fr/register";
const passInput = registerDom.signup.passInput;
const submitBtn = registerDom.signup.submitBtn;
const emailInput = registerDom.signup.emailInput;
const fnInput = registerDom.signup.fnInput;
const lnInput = registerDom.signup.lnInput;
const invalidNamePrompt = registerDom.signup.invalidNamePrompt;
const invalidCredentialsPrompt = registerDom.signup.invalidCredentialsPrompt;

And("And he should be prompted {string} under the name", (value) => {
    cy.get(invalidNamePrompt).should('contain.text', value)
});
