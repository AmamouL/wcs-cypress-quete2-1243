import { When, Then, Before, And } from "cypress-cucumber-preprocessor/steps";
import { SignupForm } from "../../../../Pom/SignupForm";
import { User } from "../../../assets/User";
import { Waiter } from "../../../assets/wait";
const faker = require("faker");

const url = "https://preprod.backmarket.fr/register";
const signupForm = new SignupForm();
const user = new User();
const newUser = new User();
const wait = new Waiter();


Given("a visitor on the register page", () => {
    cy.clearCookies();
    cy.visit(url);
    cy.wait(wait.xl);
});


And("signup form is valid", () => {
    cy.get(signupForm.emailInput).type(user.email);
    cy.get(signupForm.fnInput).type(user.fn);
    cy.get(signupForm.lnInput).type(user.ln);
    cy.get(signupForm.passInput).type(user.password);
});

And("signup form is valid with new user", () => {
    cy.get(signupForm.emailInput).type(newUser.email);
    cy.get(signupForm.fnInput).type(newUser.fn);
    cy.get(signupForm.lnInput).type(newUser.ln);
    cy.get(signupForm.passInput).type(newUser.password);
});

When("he empties email field", () => {
    cy.get(signupForm.emailInput).clear();
});

When("he empties ln field", () => {
    cy.get(signupForm.lnInput).clear();
});

When("he empties fn field", () => {
    cy.get(signupForm.fnInput).clear();
});

When("he changes password to an invalid format", () => {
    cy.get(signupForm.passInput).clear().find("input").focus().blur();
});
When("he signs up", () => {
    cy.get(signupForm.submitBtn).click();
});

And("Email is already used", () => {
    cy.get(signupForm.submitBtn).click();
    cy.wait(wait.l);
    cy.clearCookies();
    cy.visit(url);
    cy.wait(wait.xl);

    cy.get(signupForm.emailInput).type(user.email);
    cy.get(signupForm.fnInput).type(user.fn);
    cy.get(signupForm.lnInput).type(user.ln);
    cy.get(signupForm.passInput).type(user.password);
});

Then("he should be prompted {string} under Email field", (value) => {
    cy.get(signupForm.emailInput).parent().next().find("li").should("contain.text", value);
    cy.get(signupForm.emailInput).parent().should("have.class", "input-error");
});

Then("he should be prompted {string} under Name field", (value) => {
    if (value.includes("Prénom")) {
        cy.get(signupForm.fnInput)
        .parentsUntil("[data-test=group]")
        .next()
        .find("li")
        .should("contain.text", value);
        cy.get(signupForm.fnInput).parent().should("have.class", "input-error");
    } else {
        cy.get(signupForm.lnInput)
        .parentsUntil("[data-test=group]")
        .next()
        .find("li")
        .should("contain.text", value);
        cy.get(signupForm.lnInput).parent().should("have.class", "input-error");
    }
});

Then("he should be prompted {string} under password field", (value) => {
    cy.get("[data-test=list-item]").should("contain.text", value);
});

Then("he should be signed up", () => {
    cy.wait(wait.m);
    cy.url().should("contain", "https://preprod.backmarket.fr/dashboard");
});