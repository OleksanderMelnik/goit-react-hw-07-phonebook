import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Div, Label, Input } from './ContactsFilter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  
  const showFilteredContacts = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <Div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={filter}
          onChange={showFilteredContacts}
        />
      </Label>
    </Div>
  );
};