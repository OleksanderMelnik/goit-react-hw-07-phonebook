import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/operations/contactsThunk';
import { List, Item, Button } from './ContctsList.style';
import { getFilteredContacts } from 'redux/selectors/selectors';

export const ContactList = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  return (
    <List>
      {contacts.map( item => (
        <Item key={item.id}>
          <b>{item.name}: </b>
          <b>{item.number}</b>
          <Button
            type="button"
            onClick={() => dispatch(deleteContactThunk(item.id))}
          >
            delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

