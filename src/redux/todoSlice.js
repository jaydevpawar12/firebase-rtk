import { createSlice } from "@reduxjs/toolkit";
import { todoApi } from "./todoApi";

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: {},
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(todoApi.endpoints.getTodos.matchPending, (state, { payload }) => {
            state.loading = true
        })
        .addMatcher(todoApi.endpoints.getTodos.matchFulfilled, (state, { payload }) => {
            state.loading = true
            state.notes = payload
        })
        .addMatcher(todoApi.endpoints.getTodos.matchRejected, (state, { payload }) => {
            state.loading = true
            state.error = payload
        })

        .addMatcher(todoApi.endpoints.addTodos.matchPending, (state, { payload }) => {
            state.loading = true
        })
        .addMatcher(todoApi.endpoints.addTodos.matchFulfilled, (state, { payload }) => {
            state.loading = true
            state.noteCreate = true
        })
        .addMatcher(todoApi.endpoints.addTodos.matchRejected, (state, { payload }) => {
            state.loading = true
            state.error = payload
        })

        .addMatcher(todoApi.endpoints.updateTodos.matchPending, (state, { payload }) => {
            state.loading = true
        })
        .addMatcher(todoApi.endpoints.updateTodos.matchFulfilled, (state, { payload }) => {
            state.loading = true
            state.noteUdate = payload
        })
        .addMatcher(todoApi.endpoints.updateTodos.matchRejected, (state, { payload }) => {
            state.loading = true
            state.error = true
        })

        .addMatcher(todoApi.endpoints.updateTodos.matchPending, (state, { payload }) => {
            state.loading = true
        })
        .addMatcher(todoApi.endpoints.updateTodos.matchFulfilled, (state, { payload }) => {
            state.loading = true
            state.noteDelete = true
        })
        .addMatcher(todoApi.endpoints.updateTodos.matchRejected, (state, { payload }) => {
            state.loading = true
            state.error = payload
        })

})

export default todoSlice.reducer