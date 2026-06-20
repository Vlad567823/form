import css from "./ContactIteam.module.css";

export default function ContactItem({
  contact,
  onDelete,
}) {
  
  return (
    <li className={css.item}>
      {contact.name}: {contact.number}

      <button
        className={css.button}
        type="button"
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}