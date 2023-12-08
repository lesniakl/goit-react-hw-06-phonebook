import React from 'react';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux//contactsSlice';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteContact(e.target.id));
    // localStorage.setItem('contacts', JSON.stringify(newContacts));
  };

  return (
    <li className={css.contactItem}>
      {name}: {number}
      <button
        type="button"
        onClick={handleDelete}
        id={id}
        className={css.contactButton}
      >
        Delete
      </button>
    </li>
  );
}
