import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  string: ''
}

export const requestStringSlice = createSlice({
  name: 'string',
  initialState,
  reducers: {
    setRequestString: (state, action) => {
      state.string = action.payload
    },
  }
});

export const { setRequestString } = requestStringSlice.actions;
export const selectRequestString = (state: RootState) => state.requestStringSlice
export default requestStringSlice.reducer