import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from 'components/contactForm/ContactForm';
import { ContactList } from 'components/contactList/ContactList';
import { Filter } from 'components/filter/Filter';
import { fetchContacts } from '../redux/operations';
import { selectError, selectIsLoading } from "../redux/selectors";


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
   <div>
     <h1>Phonebook</h1>
     <ContactForm />
     {isLoading && !error && <b>Request in progress...</b>}
     <h2>Contacts</h2>
     <Filter />
     <ContactList />
   </div>
 );
};
