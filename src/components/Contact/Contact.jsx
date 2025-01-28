import styles from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={styles.item}>
      {name}: {number}
      <button className={styles.deleteButton} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
