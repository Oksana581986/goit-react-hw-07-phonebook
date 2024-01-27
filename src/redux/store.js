import { configureStore } from "@reduxjs/toolkit";
import  { contactsReducer }  from './contacts/contactsSlise';


export const store = configureStore({
    reducer: {
     contacts: contactsReducer,
    },
});