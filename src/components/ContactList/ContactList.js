import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import * as actions from '../../redux/phonebook-actions';
import { getVisibleContacts } from '../../redux/phonebook-selectors';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();
  const deleteContact = id => dispatch(actions.deleteContact(id));

  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          name={name}
          number={number}
          deleteContact={deleteContact}
          key={id}
          id={id}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
