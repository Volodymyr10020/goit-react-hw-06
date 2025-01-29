import styles from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <li className={styles.item}>
      {name}: {number}
    </li>
  );
};

export default Contact;
