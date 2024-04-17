import { faker, fakerRU } from '@faker-js/faker';

export function generateClientsData(responsibleUser: string) {
  return {
    accountNumber: faker.number.int({ min: 100000000000, max: 999999999999 }).toString(),
    lastName: fakerRU.person.lastName(),
    firstName: fakerRU.person.firstName(),
    surname: fakerRU.person.middleName(),
    birthDate: faker.date.birthdate().toUTCString(),
    inn: faker.number.int({ min: 100000000000, max: 999999999999 }).toString(),
    responsibleUser,
    status: faker.helpers.arrayElement(['Не в работе', 'В работе', 'Завершен']),
  };
}
