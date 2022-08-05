import { configureStore } from '@reduxjs/toolkit';
import groupReducer from './reducers/GroupSlice';
import strReducer from './reducers/StrSlice';

const store = configureStore({
  reducer: {
    strSlice: strReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
