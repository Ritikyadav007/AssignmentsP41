import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import groupReducer from './reducers/GroupSlice';

const store = configureStore({
  reducer: {
    groups: groupReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
