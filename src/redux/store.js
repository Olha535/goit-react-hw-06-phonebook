// import { createStore, combineReducer } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contacts from './phonebook-reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

console.log(getDefaultMiddleware());

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredAction: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistConfig = {
  key: 'contacts',
  storage,
  blackList: ['filter'],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contacts),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

console.log(store);

export default { store, persistor };
