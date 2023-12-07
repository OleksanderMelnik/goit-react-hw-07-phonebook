import axios from 'axios';


const contactsApi = axios.create({
    baseURL: 'https://6570514a09586eff66411cee.mockapi.io/contacts/',
});

export const fetchContacts = async () => {
  const { data } = await contactsApi.get();
  return data;
};

export const deleteContact = async id => {
  const { data } = await contactsApi.delete(id);
  return data;
};

export const addContact = async contact => {
  const { data } = await contactsApi.post('', contact);
  return data;
};