export interface UserData {
  username: string;
  login: string;
  password: string;
}

export interface ClientData {
  firstName: string;
  lastName: string;
  surname: string;
  inn: string;
  birthDate: string;
  accountNumber: string;
  responsibleUser: string;
  status: string;
}

export interface ClientItemData {
  lastName: string;
  firstName: string;
  surname: string;
  status: string;
  inn: string;
  accountNumber: string;
  _id: string;
}
