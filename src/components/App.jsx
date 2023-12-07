import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from 'redux/operations/contactsThunk';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
// import { Div, Title, TitleContact } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};