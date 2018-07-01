import React from 'react'
//This is a prop (onsubmit)
//It will be receiving this action or state from the container.
//In this case, it's just an action because this component has no state


let AddTodoForm = ({ onSubmit }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        onSubmit(input.value)
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodoForm
