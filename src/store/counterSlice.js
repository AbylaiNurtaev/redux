import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },   //изначальное значение нашего счётчика (обычно передаются объекты)
    reducers: {
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        },
        addBy(state, action){
            state.count+= action.payload
        }

    } // штука которая позволит изменять нам счётчик (как setState в useState)
})

export const {increment, decrement, addBy} = counterSlice.actions

export const counterReducer = counterSlice.reducer