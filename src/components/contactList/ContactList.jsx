import { useSelector } from 'react-redux';
import Contact from '../contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  return (
    <div className='container'>
      <ul className={css.list}>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
