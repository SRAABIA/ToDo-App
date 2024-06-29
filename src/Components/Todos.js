import React from 'react';
import TodoItem from "./TodoItem.js";
const Todos = (props) => {
  return (
    <div id="todos-section" className='container'>
      <h2 className='text-center' style={{
        paddingTop: '84px',
        fontWeight: 'bold',
        color: '#000000',
        fontSize: '36px'
      }}>
        Todos
      </h2>

      {props.todos.length === 0 ? (
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          margin: '20px', padding: '20px', paddingBottom: '20px',
          backgroundColor: '#f0f0f0', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          fontSize: '25px', color: 'rgb(229 10 10)', fontWeight: '700'
        }}>
          No todos to display !!
        </div>
      ) :

        <div style={{
          marginTop: '50px',
          padding: '20px',
          paddingBottom: '80px',
          backgroundColor: '#000000',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          fontSize: '18px',
          color: '#333',
        }}>
          {
            props.todos.map((todo) => (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            ))
          }

        </div>
      }

      {/* <TodoItem todo={props.todos[0]} />
      <TodoItem todo={props.todos[1]} /> */}
    </div>
  )
}

export default Todos
