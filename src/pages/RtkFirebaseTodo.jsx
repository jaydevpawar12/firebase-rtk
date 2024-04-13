import React from 'react'
import { useAddTodosMutation, useDeleteTodosMutation, useGetTodosQuery, useUpdateTodosMutation } from '../redux/todoApi'

const RtkFirebaseTodo = () => {
    const { data, error, isLoading } = useGetTodosQuery()
    const [addTodo] = useAddTodosMutation()
    const [updateTodo] = useUpdateTodosMutation()
    const [deleteTodo] = useDeleteTodosMutation()

    if (isLoading) return <h1>Loading...</h1>
    return <>
        <button onClick={e => addTodo({ task: "New FIREBASE RASK" })}>add todo</button>
        {
            data && data.map(item => <div key={item.id}>
                <h1>{item.id}:{item.task}</h1>
                <button onClick={e => updateTodo({ id: item.id, task: "UPDATE TASK" })}>update</button>
                <button onClick={e => deleteTodo(item.id)}>delete</button>
            </div>)
        }
    </>
}

export default RtkFirebaseTodo