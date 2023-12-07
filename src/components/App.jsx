import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from 'redux/operations/contactsThunk';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Div, Title, TitleContact } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Div>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleContact>Contacts</TitleContact>
      <Filter />
      <ContactList />
    </Div>
  );
};