import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    let id = 1;

    if (todos.length > 0) {
      id = todos[0].id + 1;
    }

    let todo = {
      id: id,
      text: text,
      completed: false,
      key: id,
    };
    setTodos([todo, ...todos]);
  }

  function handleDelete(id) {
    let newTodoss = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoss);
  }

  function handleComplete(id) {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
    console.log(todos);
  }

  let elements = todos.map((todoEl) => (
    <TodoItem
      text={todoEl.text}
      id={todoEl.id}
      key={todoEl.id}
      handleDelete={handleDelete}
      handleComplete={handleComplete}
      completed={todoEl.completed}
    />
  ));

  return (
    <div>
      <h1>TodoApp</h1>
      <TodoForm td={todos} addTodo={addTodo} />
      {elements}
    </div>
  );
}

// export default function App() {
//   const [todos, setTodos] = useState([]);

//   //////////////////Add Todo Function//////////////////
//   const addTodo = (text) => {
//     let id = 1;
//     if (todos.length > 0) {
//       id = todos[0].id + 1;
//     }
//     let todo = {
//       id: id,
//       text: text,
//       completed: false,
//     };
//     let newTodos = [todo, ...todos];
//     setTodos(newTodos);
//   };
//   //////////////////Add Todo Function//////////////////

//   //////////////////Remove Todo Function//////////////////
//   const removeTodo = (id) => {
//     let updatedTodos = [...todos].filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   };
//   //////////////////Remove Todo Function//////////////////

//   //////////////////Complete Todo Function//////////////////
//   const completeTodo = (id) => {
//     let updatedTodos = todos.map((todo) => {
//       if (todo.id === id) {
//         todo.completed = !todo.completed;
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };
//   //////////////////Complete Todo Function//////////////////

//   //////////////////Render Elements//////////////////
//   let elements = todos.map((todo) => {
//     return (
//       <TodoItem
//         removeTodo={removeTodo}
//         completeTodo={completeTodo}
//         todo={todo}
//         key={todo.id}
//       />
//     );
//   });
//   //////////////////Render Elements//////////////////

//   return (
//     <div className="todo-app">
//       <h1>TodoList</h1>
//       <TodoForm addTodo={addTodo} />
//       <hr className="separator" />
//       {elements}
//     </div>
//   );
// }
/*between */
// function App() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (text) => {
//     let id = 1;
//     if (todos.length > 0) {
//       id = todos[0].id + 1;
//     }
//     let todo = { id: id, text: text, completed: false, important: false };
//     let newTodos = [todo, ...todos];
//     setTodos(newTodos);
//   };

//   const removeTodo = (id) => {
//     let updatedTodos = [...todos].filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   const completeTodo = (id) => {
//     let updatedTodos = todos.map((todo) => {
//       if (todo.id === id) {
//         todo.completed = !todo.completed;
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   let elements = todos.map((todo) => {
//     return (
//       <TodoItem
//         removeTodo={removeTodo}
//         completeTodo={completeTodo}
//         todo={todo}
//         key={todo.id}
//       />
//     );
//   });
//   return (
//     <div className="todo-app">
//       <h1>Todo List</h1>
//       <TodoForm addTodo={addTodo} />
//       <hr className="seperator" />
//       {elements}
//     </div>
//   );
// }

// export default App;
