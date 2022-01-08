import { createSlice } from '@reduxjs/toolkit'
import { lotteryApi } from '../../api/api';
// Slice
const lotterySlice = createSlice({
  name: 'lottery',
  initialState: {
    lotteryList: null,
  },
  reducers: {
    getLotteryList: (state, action) => {
      state.lotteryList = action.payload;
    },
  },
});
export default lotterySlice.reducer
// Actions
const { getLotteryList} = lotterySlice.actions
export const getAllLotterty = () => async dispatch => {
  try {
    const res = await lotteryApi()
    dispatch(getLotteryList(res.data));
  } catch (e) {
    return console.error(e.message);
  }
}