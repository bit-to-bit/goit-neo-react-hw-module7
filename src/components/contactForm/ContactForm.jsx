import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import clsx from 'clsx';
import css from './ContactForm.module.css';
import * as Yup from 'yup';

const customSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div className={clsx(css.formContainer, 'container')}>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={customSchema}
      >
        <Form>
          <div className={css.formGroup}>
            <label htmlFor={nameId}>Name</label>
            <Field type='text' name='name' id={nameId} />
            <ErrorMessage name='name' component='span' className={css.error} />
          </div>
          <div className={css.formGroup}>
            <label htmlFor={numberId}>Number</label>
            <Field type='text' id={numberId} name='number' />
            <ErrorMessage
              name='number'
              component='span'
              className={css.error}
            />
          </div>
          <br />
          <button type='submit'>Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
