import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      if (
        !state.items.some((contact) => contact.name === action.payload.name)
      ) {
        state.items.push(action.payload);
      } else {
        console.warn(
          `${action.payload.name} already exists in the contact list.`
        );
      }
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
