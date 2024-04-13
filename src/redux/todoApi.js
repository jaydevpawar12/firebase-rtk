import { createApi, fakeBaseQuery, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "../../config/firebase"

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["todo"],
    endpoints: (builder) => {
        return {
            getTodos: builder.query({
                queryFn: async () => {
                    try {
                        const todoRef = collection(db, "todo")
                        const result = await getDocs(todoRef)
                        const filtered = result.docs.map(item => {
                            return { ...item.data(), id: item.id }
                        })
                        return { data: filtered }
                    } catch (error) {
                        console.log(error);
                        return { error: error.message }
                    }
                },
                providesTags: ["todo"]
            }),
            addTodos: builder.mutation({
                queryFn: async todoData => {
                    try {
                        const todoRef = collection(db, "todo")
                        const result = await addDoc(todoRef, todoData)

                        return "todo create success"
                    } catch (error) {
                        console.log(error);
                        return { error: error.message }
                    }
                },
                invalidatesTags: ["todo"]
            }),
            updateTodos: builder.mutation({
                queryFn: async todoData => {
                    try {
                        const todoRef = doc(db, "todo", todoData.id)
                        const result = await updateDoc(todoRef, todoData)

                        return "todo update success"
                    } catch (error) {
                        console.log(error);
                        return { error: error.message }
                    }
                },
                invalidatesTags: ["todo"]
            }),
            deleteTodos: builder.mutation({
                queryFn: async id => {
                    try {
                        const todoRef = doc(db, "todo", id)
                        const result = await deleteDoc(todoRef)

                        return "todo delete success"
                    } catch (error) {
                        console.log(error);
                        return { error: error.message }
                    }
                },
                invalidatesTags: ["todo"]
            }),
        }
    }
})

export const {
    useAddTodosMutation,
    useUpdateTodosMutation,
    useDeleteTodosMutation,
    useGetTodosQuery
} = todoApi
