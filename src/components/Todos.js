import React from 'react';
import { useSelector } from 'react-redux';
import TodoForm from './TodoForm';

const Todos = () => {
  // const [todos, setTodos] = useState([]);
  const todos = useSelector((state) => state.myTodos);

  // const renderedList = todos.map((todo) => (
  //   <li key={todo.id}>
  //     {todo.title}
  //     <input type="checkbox" />
  //     <button>Delete</button>
  //   </li>
  // ));

  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <input type="checkbox" />
            <button>Delete</button>
          </li>
        ))}

        {/* {Array.isArray(todos) ? (
          todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              <input type="checkbox" />
              <button>Delete</button>
            </li>
          ))
        ) : (
          <>{console.log(todos)}</>
        )} */}
      </ul>
    </div>
  );
};
// Todos.prototype = {
//   todos: PropTypes.array.isRequired,
// };
// const mapStateToProps = (state) => ({ todos: state.myTodos });

export default Todos;
