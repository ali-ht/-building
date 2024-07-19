import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})