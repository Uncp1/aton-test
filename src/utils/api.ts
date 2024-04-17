import { ClientData, UserData } from './types';

const URL = 'http://localhost:3000';

interface ResponseObject {
  ok?: boolean;
  created?: boolean;
  json: () => Promise<any>;
}
const checkResponse = (res: ResponseObject) => {
  if (res.ok || res.created) {
    return res.json();
  }
  return res.json().then((err: any) => Promise.reject(err));
};

const headersWithContentType = { 'Content-Type': 'application/json' };
const headersWithAuthorizeFn = () => ({
  'Content-Type': 'application/json',
  authorization: `Bearer ${sessionStorage.getItem('auth_token')}`,
});

export const registerUser = (userData: UserData) =>
  fetch(`${URL}/signup/`, {
    method: 'POST',
    headers: headersWithContentType,
    body: JSON.stringify(userData),
  }).then(checkResponse);

export const loginUser = (login: string, password: string) =>
  fetch(`${URL}/signin/`, {
    method: 'POST',
    headers: headersWithContentType,
    body: JSON.stringify({ login, password }),
  })
    .then(checkResponse)
    .then((data: any) => {
      if (data.access_token) {
        sessionStorage.setItem('auth_token', data.access_token);
        return data;
      }
      throw new Error('No access token received');
    });

export const logoutUser = () => {
  sessionStorage.removeItem('auth_token');
};

export const getClients = (responsibleUser: string) =>
  fetch(`${URL}/clients/${responsibleUser}`, {
    method: 'GET',
    headers: headersWithAuthorizeFn(),
  }).then(checkResponse);

export const postClient = (clientData: ClientData) =>
  fetch(`${URL}/clients/`, {
    method: 'POST',
    headers: headersWithAuthorizeFn(),
    body: JSON.stringify(clientData),
  }).then(checkResponse);

export const patchClient = (id: string, status: string) => {
  fetch(`${URL}/clients/${id}`, {
    method: 'PATCH',
    headers: headersWithAuthorizeFn(),
    body: JSON.stringify({ status }),
  }).then(checkResponse);
};
