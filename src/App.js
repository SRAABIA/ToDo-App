import './App.css';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import About from "./Components/About";
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

function App() {
  const initTodo = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
  const [todos, setTodos] = useState(initTodo);
  const [nextSno, setNextSno] = useState(todos.length > 0 ? Math.max(...todos.map(todo => todo.sno)) + 1 : 1);
  //   sno: 1,
  //   title: "Say no to procrastination",
  //   description: "Aj kay din bas aram kringy"
  //  localStorage.getItem("todos");
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todoToDelete) => {
    // USe-state hook is used to remove one item
    // 1:15:46 vid
    // setTodos(prevTodos => prevTodos.filter(e => e !== todo));
    setTodos(prevTodos => {
      const updatedTodos = prevTodos.filter(todo => todo.sno !== todoToDelete.sno);
      // Adjust sno for remaining todos
      const reindexedTodos = updatedTodos.map((todo, index) => ({
        ...todo,
        sno: index + 1 // Adjust sno to start from 1 again
      }));
      localStorage.setItem('todos', JSON.stringify(todos));
      setNextSno(reindexedTodos.length + 1); // Set nextSno to the next number in sequence
      return reindexedTodos;
    });
  }
  const addTodo = (title, description) => {
    // let sno = todos.length > 0 ? todos[0].sno + 1 : 1;
    // const newTodo = { sno, title, description };
    // setTodos(prevTodos => [newTodo, ...prevTodos]);
    const newTodo = { sno: nextSno, title, description };
    setTodos(prevTodos => [newTodo, ...prevTodos]);
    setNextSno(nextSno + 1);
    // if(  localStorage.getItem("todos")){
    // localStorage.setItem('todos', JSON.stringify(todos));
  }

  return (
    <>
      {/* yellow for bckground */}
      <Router>
        <div style={{ backgroundColor: '#FFC107', minHeight: '100vh' }}>
          <Header title="PRO TODO LIST" searchBar={false} />
         
          <Routes>
            <Route path='/' element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />

              </>
            } />
             <Route path='/to-do' element={
              <>
                <Todos todos={todos} onDelete={onDelete} />
              </>
            } />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
