import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import axios from 'axios';

const base = 'https://api.openbrewerydb.org/v1/breweries';
export const fetchData = createAsyncThunk('all breweries', async (link) => {
  try {
    const url = `${base}?${link}`;
    const config = {
      method: 'get',
      url,
      redirect: 'follow',
      headers: {},
    };

    const data = await axios.request(config);
    return data.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

const initialState = {
  breweriesData: [],
  isSuccess: false,
  message: '',
  loading: false,
};

export const breweriesSlice = createSlice({
  name: 'breweries',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.breweriesData = action.payload;
        state.isSuccess = true;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.message = action.payload;
        state.loading = false;
        state.isSuccess = false;
      });
  },
});

// export const { fruits, fruit } = fruitsSlice.actions;

export default breweriesSlice.reducer;
