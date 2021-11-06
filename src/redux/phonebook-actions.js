import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/add', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

console.log(addContact('halo'));

const deleteContact = createAction('phonebook/delete');
const changeFilter = createAction('phonebook/changeFilter');

export default { addContact, deleteContact, changeFilter };

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
