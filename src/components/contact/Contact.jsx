import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';
import { BiSolidPhone, BiSolidUser } from 'react-icons/bi';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.card}>
      <div className={css.info}>
        <p className={css.name}>
          <BiSolidUser /> {contact.name}
        </p>
        <p className={css.phone}>
          <BiSolidPhone /> {contact.number}
        </p>
      </div>
      <div className={css.actions}>
        <button
          onClick={() => {
            dispatch(deleteContact(contact.id));
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
