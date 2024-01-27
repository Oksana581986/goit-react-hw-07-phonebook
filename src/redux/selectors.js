import { createSelector } from "@reduxjs/toolkit";


export const selectContacts = state => state.contacts.contacts;

export const selectItems = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.contacts.filter;


export const selectVisibleTasks = createSelector(
    [selectContacts, selectFilter],
    (contacts, Filter) => {
    //   console.log("Calculating visible tasks");
  
      switch (Filter) {
        case Filter.active:
          return contacts.filter(contact => !contact.completed);
        case Filter.completed:
          return contacts.filter(contact => contact.completed);
        default:
          return contacts;
      }
    }
  );