import { createSlice } from '@reduxjs/toolkit'
import {  prizeApi } from '../../api/api';
// Slice
var initialState={
    prizeList: null,
}
const prizeSlice = createSlice({
  name: 'prize',
  initialState,
  reducers: {
    getPrizeList: (state, action) => {
      state.prizeList = action.payload;
    },
  },
});
export default prizeSlice.reducer
// Actions
const { getPrizeList} = prizeSlice.actions
export const getAllPrize = () => async dispatch => {
  try {
    const res = await prizeApi()
    dispatch(getPrizeList(res.data.data));
  } catch (e) {
    return console.error(e.message);
  }
}