import ContactList from './components/contactList/ContactList';
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/searchBox/SearchBox';

const App = () => {
  return (
    <>
      <div className='container'>
        <h1>Phonebook</h1>
      </div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default App;
