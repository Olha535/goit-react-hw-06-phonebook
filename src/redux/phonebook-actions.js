import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('phonebook/add', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

export const deleteContact = createAction('phonebook/delete');
export const changeFilter = createAction('phonebook/changeFilter');

///////////////////////////////////////////////////

// import { v4 as uuidv4 } from "uuid";
// import types from "./types";

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContact = (conactId) => ({
//   type: types.DELETE,
//   payload: conactId,
// });

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
