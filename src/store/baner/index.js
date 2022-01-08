import { createSlice } from '@reduxjs/toolkit'
import { banerApi } from '../../api/api';
// Slice
var initialState={
    banerList: null,
}
const banerSlice = createSlice({
  name: 'baner',
  initialState,
  reducers: {
    getBanetList: (state, action) => {
      state.banerList = action.payload;
    },
  },
});
export default banerSlice.reducer
// Actions
const { getBanetList} = banerSlice.actions
export const getMainBaner = () => async dispatch => {
  try {
    const res = await banerApi()
    dispatch(getBanetList(res.data.data));
  } catch (e) {
    return console.error(e.message);
  }
}