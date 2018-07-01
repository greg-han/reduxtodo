import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './components/App'
import todoApp from './reducers'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'


let store = createStore(todoApp)

render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
)
