const url = "https://preprod.backmarket.fr/register";


Given("a visitor on the register page", () => {
    cy.clearCookies();
    cy.visit(url);
    cy.wait(3000)
});
