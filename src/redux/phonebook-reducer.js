import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './phonebook-actions';
import ContactJson from '../components/contacts.json';

const items = createReducer(ContactJson, {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

////////////////////////////////////////////////////////////

// import { combineReducers } from "redux";
// import actions from "./actions";
// import types from "./types";

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DELETE:
//       return state.filter(({id}) => id !== payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

// const initialState = combineReducers({
//   items,
//   filter,
// });
