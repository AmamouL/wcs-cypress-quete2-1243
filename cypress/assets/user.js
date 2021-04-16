let faker = require("faker");

export const user = {
    email: faker.internet.email(),
    fn: faker.name.firstName(),
    ln: faker.name.lastName(),
    password: faker.internet.password(),
};