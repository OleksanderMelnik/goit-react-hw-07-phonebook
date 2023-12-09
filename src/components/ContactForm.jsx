import { useDispatch } from 'react-redux';
import React from 'react';
import { Form, Label, Button, Input } from './ContactsForm.styled'
import { addContactThunk } from 'redux/contactsThunk';

export const ContactForm = () => {
  
  const dispatch = useDispatch(); 

  const handleChange = event => {
    event.preventDefault();

    const newObj = {
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };
 
    dispatch(addContactThunk(newObj));
    event.target.reset();
    
  };

  return (
    <Form onSubmit={handleChange}>
      <Label htmlFor="">
        Name
        <Input
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