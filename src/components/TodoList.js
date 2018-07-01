import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) =>{
  if(todos.length === 0)
    return <div>Add Todos</div>

    return <ul>
      {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    )}
  </ul> 
}
export default TodoList
