import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        localStorage.setItem('contacts', JSON.stringify(state));
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const newState = state.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;
    },

    loadContacts(state, action) {
      return [...action.payload];
    },
  },
});

export const { addContact, deleteContact, loadContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
