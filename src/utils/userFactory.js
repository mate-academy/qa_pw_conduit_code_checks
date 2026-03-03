import { faker } from '@faker-js/faker';

export function generateValidUsername() {
  const raw = `${faker.person.firstName()}_${faker.person.lastName()}`;

  return raw
    .replace(/\s+/g, '')
    .replace(/[^a-zA-Z0-9_]/g, '')
    .slice(0, 40);
}

export function generateUser() {
  return {
    username: generateValidUsername(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}
