import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfigContacts = {
  key: 'contacts',
  storage,
};

const persistConfigFilters = {
  key: 'filters',
  storage,
};

const contactsPersistedReducer = persistReducer(
  persistConfigContacts,
  contactsReducer
);
const filtersPersistedReducer = persistReducer(
  persistConfigFilters,
  filtersReducer
);

const rootReducer = combineReducers({
  contacts: contactsPersistedReducer,
  filters: filtersPersistedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
