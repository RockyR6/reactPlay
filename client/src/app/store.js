import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'


export const store = configureStore({
    reducer: {
        //here we put all the Reducer we create
        counter: counterReducer,
    }
})