import React from 'react';
import css from './Filter.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <label htmlFor="filterInput" className={css.filterLabel}>
        Find contacts by name
      </label>
      <input
        type="text"
        className={css.filterInput}
        id="filterInput"
        value={filter}
        onChange={handleChange}
      />
    </>
  );
}
