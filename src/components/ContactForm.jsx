import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { Form, Label, Button, Input } from './ContactsForm.styled'
import { addContactThunk } from 'redux/contactsThunk';
import { getFilteredContacts } from 'redux/selectors';

export const ContactForm = () => {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getFilteredContacts);
 
  const dispatch = useDispatch(); 

  const handleSubmit = event => {
    event.preventDefault();

    const filterContact = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (filterContact) {
      alert(`${name} is already in contacts`);
      resetInput();
    return;
}

    dispatch(addContactThunk({ name, number }));
    resetInput();
    };

    const handleChange = event => {
      const { name, value } = event.target;
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'number':
          setNumber(value);
          break;
        default:
          return;
      }
    };

    const resetInput = () => {
      setName('');
      setNumber('');
    };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="">
        Name
        <Input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          title=""
          required
          placeholder="Еnter or paste name"
        />
      </Label>
      <Label htmlFor="">
        Number
        <Input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          title=""
          required
          placeholder="+38 (000) 000-00-00"
        />
      </Label>
      <Button type="submit">
        Add contact
      </Button>
    </Form>
  );
};