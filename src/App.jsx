import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";

const STORAGE_KEY = "contacts";

export default function App() {
  const [contacts, setContacts] = useState([]);

  // Завантаження контактів при першому рендері
  useEffect(() => {
    const savedContacts = localStorage.getItem(STORAGE_KEY);

    if (savedContacts !== null) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  // Збереження контактів при кожній зміні
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm onAddContact={addContact} />

      <ContactList
        contacts={contacts}
        onDelete={deleteContact}
      />
    </>
  );
}