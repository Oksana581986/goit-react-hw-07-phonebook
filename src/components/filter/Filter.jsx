import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/selectors';
import css from './Filter.module.css';
 
 
const Filter = () => {
const dispatch = useDispatch();
const filter = useSelector(selectFilter);

const handleFilterChange = event => {
  const value = event.currentTarget.value.toLowerCase();
  dispatch(setFilter(value));
};

  return (
    <label className={css.labelfilter}>
      Filter contacts by name:
      <input className={css.inputfilter} type="text" name="filter" value={filter} onChange={handleFilterChange} />
    </label>
  );
};

  export { Filter };