import { TodoApi } from "../../api/todoApi/todoApi";

/**
 * CRUD Todo action type constants.
 */

//Create
export const CREATE_TODO = 'CREATE_TODO'
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS'
export const CREATE_TODO_ERROR = 'CREATE_TODO_ERROR'


//Read
export const GET_TODOS = 'GET_TODOS'
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
export const GET_TODOS_ERROR = 'GET_TODOS_ERROR'


//Update
export const START_EDITING = 'START_EDITING'
export const CANCEL_EDITING = 'CANCEL_EDITING'
export const UPDATE_TODO = 'UPDATE_TODO'
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS'
export const UPDATE_TODO_ERROR = 'UPDATE_TODO_ERROR'
export const COMPLETE_TODO = 'COMPLETE_TODO'

//Delete
export const DELETE_TODO = 'DELETE_TODO'
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'
export const DELETE_TODO_ERROR = 'DELETE_TODO_ERROR'


//Create
export function createTodo(todo) {
    return (dispatch, getState) => {
        return TodoApi.createTodo(todo).then(res => {
            dispatch(createTodoSuccess(res.data.todo))
        })
    }
}

export function createTodoSuccess(todo) {
    return {
        type: CREATE_TODO_SUCCESS,
        todo
    }
}


//Read
export function getTodos() {
    return (dispactch, getState) => {
        return TodoApi.getTodo().then(res => {
            dispactch(getTodoSuccess(res))
        })
    }
}

export function getTodoSuccess(todos) {
    console.log(todos);
    return {
        type: GET_TODOS_SUCCESS,
        todos
    }
}


//Update
export function startEditing(_id) {
    return {
        type: START_EDITING,
        _id
    }
}
export function cancelEditing(_id) {
    return {
        type: CANCEL_EDITING,
        _id
    }
}

export function updateTodo(todo) {
    return (dispatch, getState) => {

        dispatch({
            type: UPDATE_TODO,
            todo
        })
        TodoApi.updateTodo(todo).then(res => {
            dispatch(updateTodoSuccess(res.data.todo))
        })
    }
}
export function updateTodoSuccess(todo) {
    return {
        type: UPDATE_TODO_SUCCESS,
        todo,
        _id: todo._id
    }
}


//Delete
export function deleteTodo(todo) {
    return (dispatch, getState) => {
        dispatch({
            type: DELETE_TODO,
            todo
        })
        TodoApi.removeTodo(todo).then(res => {
            if (res.status === 200) {
                dispatch(deleteTodoSuccess(todo))
            }
        })
    }
}
export function deleteTodoSuccess(todo) {
    return {
        type: DELETE_TODO_SUCCESS,
        todo,
        _id: todo._id
    }
}