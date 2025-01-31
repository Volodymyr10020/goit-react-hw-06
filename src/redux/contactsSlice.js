import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  name: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      const { id, name, number } = action.payload;
      state.items.push({ id, name, number });
    },
    deleteContact(state, action) {
      const contactId = action.payload;
      state.items = state.items.filter((contact) => contact.id !== contactId);
    },
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.contacts.name;

export default contactsSlice.reducer;
