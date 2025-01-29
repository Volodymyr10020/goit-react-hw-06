import styles from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <li className={styles.item}>
      {name}: {number}
      <button className={styles.deleteButton}>Delete</button>
    </li>
  );
};

export default Contact;
