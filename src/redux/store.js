import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./todoApi";
import todoSlice from "./todoSlice";


const reduxStore = configureStore({
    reducer: {
        [todoApi.reducerPath]: todoApi.reducer,
        todos: todoSlice
    },
    middleware: defaultMiddleware => [...defaultMiddleware(), todoApi.middleware]
})

export default reduxStore