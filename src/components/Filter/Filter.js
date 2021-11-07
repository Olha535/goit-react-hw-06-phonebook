import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/phonebook-actions';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { getFilter } from '../../redux/phonebook-selectors';

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const onChange = e => dispatch(actions.changeFilter(e.target.value));

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={s.input}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
