import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectVisibleContacts } from '../../redux/selectors';
import css from './ContactList.module.css';


  const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);

  const handleDeleteContact = (contactId) => dispatch(deleteContact(contactId));
  
return (
    <div>
       <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button className={css.delete} onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

  export { ContactList };