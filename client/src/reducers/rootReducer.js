import { combineReducers } from 'redux'
import { TodoListReducer } from '../todos/reducers/todoReducers'

const rootReducer = combineReducers({
    todos: TodoListReducer
})

export default rootReducer;