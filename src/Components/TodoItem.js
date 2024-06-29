import React from 'react'

const TodoItem = ({sno, todo, onDelete }) => {
  return (
    <div className="card border-dark mb-3" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      marginTop: '5px',
      overflowY: 'hidden',
      maxHeight: 'calc(100vh - 120px)'
    }}>
      <div className="card-header">Todo Item {todo.sno}</div>
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.description}</p>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => { onDelete(todo) }}
          style={{ transition: "background-color 0.1s ease" , padding:'5px 8px' , fontSize: '15px' }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#c0062d"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#dc3545"}
        >
          Delete
        </button>
        {/* It defines an anonymous arrow function that is called when the user clicks on the element.
         This function, in turn, calls the onDelete function, passing todo as an argument */}

        {/* Using onClick={onDelete(todo)} directly in JSX will cause the onDelete function to be executed 
         immediately when the component renders, not when the button is clicked.  */}
      </div>
    </div>
  )
}

export default TodoItem
