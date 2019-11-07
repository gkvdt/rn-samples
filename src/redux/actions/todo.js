import { ADD_TODO } from "../reducers/todo"


export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: {
            todo
        }
    }
}