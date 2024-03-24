import {configureStore} from '@reduxjs/toolkit'
import { counterReducer } from './counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer //называем так же как и назвали name внутри slice
    }
})
