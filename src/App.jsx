import { useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import styles from "./App.module.css";

const App = () => {
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default App;
