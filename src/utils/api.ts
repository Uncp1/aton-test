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

export const loginUser = (username: string, password: string) =>
  fetch(`${URL}/signin/`, {
    method: 'POST',
    headers: headersWithContentType,
    body: JSON.stringify({ username, password }),
  })
    .then(checkResponse)
    .then((data: any) => {
      if (data.access_token) {
        sessionStorage.setItem('auth_token', data.access_token);
        return data;
      }
      // Directly return a value or throw an error without an else block
      throw new Error('No access token received');
    });

export const getClients = () =>
  fetch(`${URL}/clients/`, {
    method: 'GET',
    headers: headersWithAuthorizeFn(),
  }).then(checkResponse);
