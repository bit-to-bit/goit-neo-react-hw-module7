import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../redux/contactsOps';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(el => el.id !== payload.id);
      })
      .addMatcher(
        ({ type }) => type.endsWith('/pending'),
        state => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        (state, { payload }) => {
          state.error = payload;
          state.loading = false;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/fulfilled'),
        state => {
          state.loading = false;
        }
      );
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
