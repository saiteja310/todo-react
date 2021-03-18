import { HttpClient } from '../httpClient'

/**
 * CRUD Operations of the Todo Api
 */

const TODO_API = `api/todos`

const createTodo = todo => {
    return HttpClient.post(TODO_API, todo)
}

const getTodo = () => {
    return HttpClient.get(TODO_API)
}

const updateTodo = todo => {
    return HttpClient.put(`${TODO_API}/${todo._id}`, todo)
}

const removeTodo = todo => {
    return HttpClient.delete(`${TODO_API}/${todo._id}`)
}

export const TodoApi = { createTodo, getTodo, updateTodo, removeTodo }