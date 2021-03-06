import * as TodoActions from '../actions/todoActions'

export function TodoListReducer(state = [], action) {
    switch (action.type) {

        case TodoActions.CREATE_TODO_SUCCESS:
            return [...state, action.todo];
        case TodoActions.GET_TODOS_SUCCESS:
            return action.todos.data.todos;
        case TodoActions.START_EDITING:
        case TodoActions.CANCEL_EDITING:
        case TodoActions.UPDATE_TODO:
        case TodoActions.UPDATE_TODO_SUCCESS:
        case TodoActions.DELETE_TODO:
            return state.map(s => todo(s, action))

        case TodoActions.DELETE_TODO_SUCCESS:
            return state.filter(s => todo(s, action))
        default:
            return state
    }
}

const todo = (state, action) => {

    if (state._id !== (action._id || action.todo._id)) {
        return state;
    }

    switch (action.type) {
        case TodoActions.START_EDITING:
            return { ...state, editing: true }
        case TodoActions.CANCEL_EDITING:
            return { ...state, editing: false }
        case TodoActions.UPDATE_TODO:
            return { ...state, editing: false, updating: true }
        case TodoActions.UPDATE_TODO_SUCCESS:
            return { ...state, ...action.todo, updating: false }
        case TodoActions.DELETE_TODO:
            return { ...state, deleting: true }
        case TodoActions.DELETE_TODO_SUCCESS:
            return false;
        default:
            return state;
    }
}