import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65b16527d16d31d11bded3fe.mockapi.io/contacts',
});

export const fetchAllContacts = async () => {
  const response = await instance.get('/contacts');
  return response;
};

export const addContactData = async ({ name, number }) => {
  const response = await instance.post('/contacts', { name, number });
  return response;
};

export const deleteContactData = async ({ contactId }) => {
  const response = await instance.delete(`/contacts/${contactId}`);
  return response;
};