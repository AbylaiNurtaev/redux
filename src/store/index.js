import {configureStore} from '@reduxjs/toolkit'
import { counterReducer } from './counterSlice'
import { ToDoReducer } from './ToDoSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer, //называем так же как и назвали name внутри slice
        ToDo: ToDoReducer
    }
})

// Задача
// Реализовать загрузку тудушек с фетчем с редакса, так же добавить инпуты которые будут добавлять задачу в глобальное хранилище