let faker = require('faker');
import { When, Then, Before, And } from "cypress-cucumber-preprocessor/steps";
import { registerDom } from "../../domElements/register";

const passInput = registerDom.signup.passInput;
const emailInput = registerDom.signup.emailInput;
const fnInput = registerDom.signup.fnInput;
const lnInput = registerDom.signup.lnInput;

const user = 
    {
        email: faker.internet.email(),
        fn: faker.name.firstName(),
        ln: faker.name.lastName(),
        password: faker.internet.password(),
    }

And("signup form is valid", () => {
    cy.get(emailInput).type(user.email);
    cy.get(fnInput).type(user.fn);
    cy.get(lnInput).type(user.ln);
    cy.get(passInput).type(user.password);
});