let faker = require("faker");

export class User {
    constructor() {
        this.email = faker.internet.email()
        this.fn = faker.name.firstName()
        this.ln = faker.name.lastName()
        this.password = faker.internet.password()
    }
};