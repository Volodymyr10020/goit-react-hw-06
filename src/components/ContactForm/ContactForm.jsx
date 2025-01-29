import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Number is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (contacts.some((contact) => contact.name === values.name)) {
      alert(`${values.name} is already in the phonebook.`);
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={styles.form}>
        <label>
          Name:
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          Number:
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
