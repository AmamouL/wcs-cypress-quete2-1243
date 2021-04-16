import { When, Then, Before, And } from "cypress-cucumber-preprocessor/steps";
import { registerDom } from "../../../assets/domElements/register";
import { user } from "../../../assets/user";
import { wait } from "../../../assets/wait"
const faker = require("faker");

const url = "https://preprod.backmarket.fr/register";

const passInput = registerDom.signup.passInput;
const emailInput = registerDom.signup.emailInput;
const fnInput = registerDom.signup.fnInput;
const lnInput = registerDom.signup.lnInput;
const submitBtn = registerDom.signup.submitBtn;

Given("a visitor on the register page", () => {
    cy.clearCookies();
    cy.visit(url);
    cy.wait(wait.xl);
});

And("signup form is valid", () => {
    cy.get(emailInput).type(user.email);
    cy.get(fnInput).type(user.fn);
    cy.get(lnInput).type(user.ln);
    cy.get(passInput).type(user.password);
});

And("signup form is valid with new user", () => {
    cy.get(emailInput).type(faker.internet.email());
    cy.get(fnInput).type(faker.name.firstName());
    cy.get(lnInput).type(faker.name.lastName());
    cy.get(passInput).type(faker.internet.password());
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

When("he changes password to an invalid format", () => {
    cy.get(passInput).clear().find("input").focus().blur();
});
When("he signs up", () => {
    cy.get(submitBtn).click();
});

And("Email is already used", () => {
    cy.get(submitBtn).click();
    cy.wait(wait.l);
    cy.clearCookies();
    cy.visit(url);
    cy.wait(wait.xl);

    cy.get(emailInput).type(user.email);
    cy.get(fnInput).type(user.fn);
    cy.get(lnInput).type(user.ln);
    cy.get(passInput).type(user.password);
});

Then("he should be prompted {string} under Email field", (value) => {
    cy.get(emailInput).parent().next().find("li").should("contain.text", value);
    cy.get(emailInput).parent().should("have.class", "input-error");
});

Then("he should be prompted {string} under Name field", (value) => {
    if (value.includes("Prénom")) {
        cy.get(fnInput)
        .parentsUntil("[data-test=group]")
        .next()
        .find("li")
        .should("contain.text", value);
        cy.get(fnInput).parent().should("have.class", "input-error");
    } else {
        cy.get(lnInput)
        .parentsUntil("[data-test=group]")
        .next()
        .find("li")
        .should("contain.text", value);
        cy.get(lnInput).parent().should("have.class", "input-error");
    }
});

Then("he should be prompted {string} under password field", (value) => {
    cy.get("[data-test=list-item]").should("contain.text", value);
});

Then("he should be signed up", () => {
    cy.wait(wait.m);
    cy.url().should("contain", "https://preprod.backmarket.fr/dashboard");
});