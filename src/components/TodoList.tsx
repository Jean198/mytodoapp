import React from 'react';
import './todoList.css';
import Todo from '../model';
import { SingleTodo } from './SingleTodo';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className='container'>
      <div className='todos'>
        <span className='todos-heading'>Active tasks</span>

        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        ))}
      </div>

      <div className='todos remove'>
        <span className='todos-heading'>Completed tasks</span>

        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
