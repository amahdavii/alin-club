import { configureStore } from '@reduxjs/toolkit'
import banerReducer from './baner'
import lotteryReducer from './lottery'
import prizeReducer from './prize'
import transactionReducer from './transaction'




export const store = configureStore({
  reducer: {
    baner: banerReducer,
    lottery:lotteryReducer,
    prize:prizeReducer,
    transaction:transactionReducer
  },
})