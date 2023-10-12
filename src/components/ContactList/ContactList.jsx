import { getFilter } from 'store/PhoneBook/filterSlice';
import { ContactItem } from '../ContactItem/ContactItem';
import { getContacts } from 'store/PhoneBook/phoneBookSlice';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFiltered = () =>
    contacts.filter(contact =>
      contact.Name.toLowerCase().includes(filter.toLowerCase())
    );

  const filteredContacts = getFiltered();

  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.Name}
            number={contact.Number}
          ></ContactItem>
        );
      })}
    </ul>
  );
};
