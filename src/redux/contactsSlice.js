import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { createSelector } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },

  reducers: {
    addContact: (state, { payload }) => {
      state.items.push({ ...payload, id: nanoid() });
    },

    deleteContact: (state, { payload }) => {
      const index = state.items.findIndex(el => el.id === payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

const selectContactsState = state => state.contacts.items;
const selectNameFilter = state => state.filters?.name?.toLowerCase() ?? '';

export const selectContacts = createSelector(
  [selectContactsState, selectNameFilter],
  (contacts, filter) =>
    contacts.filter(el => el.name.toLowerCase().includes(filter))
);

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
