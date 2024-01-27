import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import css from './ContactList.module.css';
import { selectContacts, selectFilter } from '../../redux/selectors';


  const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handleDeleteContact = () => dispatch(deleteContact(contacts.id));
 
  const filteredContacts = contacts.items.filter((contact) =>
  contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

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