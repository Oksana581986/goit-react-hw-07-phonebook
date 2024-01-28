import { configureStore } from "@reduxjs/toolkit";
import  { contactsReducer }  from './contacts/contactsSlise';
import { filtersReducer } from "./filter/filterSlice";


export const store = configureStore({
    reducer: {
     contacts: contactsReducer,
     filter: filtersReducer,
    },
});