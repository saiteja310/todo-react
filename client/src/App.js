import React from 'react';
import { Routes } from './routes'
import { Provider } from 'react-redux'
import { configureStore } from './store/configureStore'
import * as TodoActions from './todos/actions/todoActions'
import './App.css';

const store = configureStore()

store.dispatch(TodoActions.getTodos())

const App = (props) => {
  return (
      <Provider store={store} >
        <Routes />
      </Provider>
  )
}

export default App;