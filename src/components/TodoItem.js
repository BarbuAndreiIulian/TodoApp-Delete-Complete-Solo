import React from "react";
import "../App.css";

function TodoItem(props) {
  return (
    <div className="todo-row">
      <div className={props.completed ? "complete" : ""}>
        <h1>{props.text}</h1>
      </div>
      <div>
        <button
          className="red round"
          onClick={() => props.handleDelete(props.id)}
        >
          Delete
        </button>
        <button onClick={() => props.handleComplete(props.id)}>Complete</button>
      </div>
    </div>
  );
}

export default TodoItem;

// import React from "react";
// import { RiCloseCircleLine } from "react-icons/ri";
// import { BiCheckCircle } from "react-icons/bi";

// export default function TodoItem(props) {
//   const { todo, removeTodo, completeTodo } = props;
//   return (
//     <div className={todo.completed ? "todo-row complete" : "todo-row"}>
//       {todo.text}
//       <div className="iconsContainer">
//         <RiCloseCircleLine
//           style={{ marginRight: 5 }}
//           onClick={() => removeTodo(todo.id)}
//         />
//         <BiCheckCircle onClick={() => completeTodo(todo.id)} />
//       </div>
//     </div>
//   );
// }
