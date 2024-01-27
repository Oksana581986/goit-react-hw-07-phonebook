import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/contactsSlise';
import { selectFilter } from '../../redux/selectors';
import css from './Filter.module.css';
 
 
const Filter = () => {
const dispatch = useDispatch();
const filter = useSelector(selectFilter);

const handleFilterChange = filter => dispatch(setFilter(filter));
// const handleFilterChange = (event) => dispatch(setFilter(event.target.value));


  return (
    <label className={css.labelfilter}>
      Filter contacts by name:
      <input className={css.inputfilter} type="text" name="filter" value={filter} onChange={handleFilterChange} />
    </label>
  );
};

  export { Filter };