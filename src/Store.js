import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/EntrepreneurSlice'

export const store = configureStore({
    reducer : {
        form: userReducer
    }
})