import { faker, fakerRU } from '@faker-js/faker';

export function generateClientData(responsibleUser: string) {
  return {
    accountNumber: faker.number.int({ min: 100000000000, max: 999999999999 }).toString(),
    lastName: fakerRU.person.lastName(),
    firstName: fakerRU.person.firstName(),
    middleName: fakerRU.person.middleName(),
    birthDate: faker.date.birthdate(),
    INN: faker.number.int({ min: 100000000000, max: 999999999999 }).toString(),
    responsibleUser,
    status: faker.helpers.arrayElement([
      'Иванов Иван Иванович',
      'Петров Петр Петрович',
      'Сидоров Сидор Сидорович',
    ]),
  };
}
