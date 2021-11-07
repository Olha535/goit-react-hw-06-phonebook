// import { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import s from './App.module.css';
import Container from '../Container';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
// import contactJson from '../contacts.json';

export default function App() {
  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
