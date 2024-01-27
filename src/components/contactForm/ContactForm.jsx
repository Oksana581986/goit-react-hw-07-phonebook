import React from 'react';
import { addContact } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { useState } from 'react';
import { selectContacts } from '../../redux/selectors';


const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState(''); 
  const [number, setNumber] = useState(''); 


  const handleSubmit = (e) => {
    e.preventDefault();

    const lowerCaseName = name.toLowerCase();

    if (contacts.some((contact) => contact.name.toLowerCase() === lowerCaseName)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = { name, number };
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  return (
    <form className={css.formcontact} onSubmit={handleSubmit}>
      <label className={css.labelname}>
        Name:
        <input className={css.inputname} type="text" name="name" value={name} onChange={handleChange} required />
      </label>
      <br />
      <label className={css.labelnumber}>
        Number:
        <input className={css.inputnumber} type="tel" name="number" value={number} onChange={handleChange} required />
      </label>
      <br />
      <button className={css.addcontact} type="submit">
        Add contact
      </button>
    </form>
  );
};

  export { ContactForm };