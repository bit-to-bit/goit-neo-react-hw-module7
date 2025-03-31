import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import ContactList from './components/contactList/ContactList';
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/searchBox/SearchBox';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const loading = useSelector(state => state.contacts.loading);
  const error = useSelector(state => state.contacts.error);

  return (
    <>
      <div className='container'>
        <h1>Phonebook</h1>
      </div>
      <ContactForm />
      <SearchBox />
      <div className='container'>
        {loading && <p>Is loading ...</p>}
        {error && <p>Sorry, error. Please try again later.</p>}
      </div>
      {!loading && !error && <ContactList />}
    </>
  );
};

export default App;
