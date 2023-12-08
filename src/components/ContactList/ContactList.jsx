import Contact from 'components/Contact/Contact';
import React from 'react';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContacts = contactList => {
    if (!filter) {
      return contactList;
    }
    const filterLower = filter.toLowerCase();
    return contactList.filter(contact => {
      const nameLower = contact.name.toLowerCase();
      return nameLower.includes(filterLower);
    });
  };

  const filteredContacts = filterContacts(contacts);

  return (
    <ul className={css.contactList}>
      {contacts.length > 0 &&
        filteredContacts.map(contact => {
          return (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          );
        })}
    </ul>
  );
}
