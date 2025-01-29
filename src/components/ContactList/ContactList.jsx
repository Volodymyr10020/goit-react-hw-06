import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => {
    const { items } = state.contacts;
    const filter = state.filters.name.toLowerCase();
    return items.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  });

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <Contact name={name} number={number} />
          <button
            className={styles.deleteButton}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
