import css from "./ContactList.module.css";
import ContactItem from "../ContactItem/ContactIteam";


export default function ContactList({
  contacts,
  onDelete,
}) {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}