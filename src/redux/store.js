import { configureStore } from '@reduxjs/toolkit';
import texasReducer from './texas/texasSlice';
import breweriesReducer from './texas/breweriesSlice';

const store = configureStore({
  reducer: {
    texas: texasReducer,
    breweries: breweriesReducer,
  },
});

export default store;
