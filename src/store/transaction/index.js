import { createSlice } from '@reduxjs/toolkit'
import {  getTotalTransactionApi } from '../../api/api';
// Slice
var initialState={
    totalTransaction: null,
}
const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setTransaction: (state, action) => {
      state.totalTransaction = action.payload;
    },
  },
});
export default transactionSlice.reducer
// Actions
const { setTransaction} = transactionSlice.actions
export const getTotalTransaction = (body) => async dispatch => {
  try {
    const res = await getTotalTransactionApi(body)
    dispatch(setTransaction(res.data.data.total));
  } catch (e) {
    return console.error(e.message);
  }
}