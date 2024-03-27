import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchToDos = createAsyncThunk(
    'ToDo/fetchTodos',
    async function() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
            const data = await response.json()
            return data;
        }
        catch (e) {
            console.log(e)
            throw e;
        }
    }
    )


const ToDoSlice = createSlice({
    name: "ToDo",
    initialState: {
        todoList: [],
        status: null,
        error: null,
    },
    reducers: {
        addList(state, {payload}){
            state.todoList.push(payload)
        },
        updateToDo(state, {payload}){
            state.todoList[payload].completed = !state.todoList[payload].completed
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchToDos.fulfilled, (state, action) => {
            state.status = null
            state.todoList.push(...action.payload)
        });
        builder.addCase(fetchToDos.pending, (state) => {
            state.status = 'loading'
        });
        builder.addCase(fetchToDos.rejected, (state, action) => {
            state.status = ''
            state.error = action.error;
        })
        
    }
}) 



export const {addList, updateToDo} = ToDoSlice.actions 
export const ToDoReducer = ToDoSlice.reducer