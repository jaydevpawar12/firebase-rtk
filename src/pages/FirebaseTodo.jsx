import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../../config/firebase'
import { useEffect } from 'react'

const FirebaseTodo = () => {
    const [notes, setNotes] = useState([])
    const getAllTodos = async () => {
        try {
            const todoRef = collection(db, "todo")
            const result = await getDocs(todoRef)
            const filltered = result.docs.map(item => {
                return { ...item.data(), id: item.id }
            })
            setNotes(filltered)
        } catch (error) {
            console.log(error);
        }
    }
    const addTodo = async () => {
        try {
            const todoRef = collection(db, "todo")
            const result = await addDoc(todoRef, { task: "NEW TODO" })
            console.log("todo create success");
            getAllTodos()
        } catch (error) {
            console.log(error);
        }
    }
    const deleteTodo = async id => {
        try {
            const todoRef = doc(db, "todo", id)
            const result = await deleteDoc(todoRef)
            console.log("todo Delete success");
            getAllTodos()
        } catch (error) {
            console.log(error);
        }
    }
    const updateTodo = async id => {
        try {
            const todoRef = doc(db, "todo", id)
            const result = await updateDoc(todoRef, { task: "Fake Task" })
            console.log("todo update success");
            getAllTodos()
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllTodos()
    }, [])
    return <>
        <button onClick={addTodo}>add todo</button>
        {
            notes.map(item => <div key={item.id}>
                <h1>{item.id}: {item.task}</h1>
                <button onClick={e => updateTodo(item.id)}>edit</button>
                <button onClick={e => deleteTodo(item.id)}>delete</button>
            </div>)
        }
    </>
}

export default FirebaseTodo