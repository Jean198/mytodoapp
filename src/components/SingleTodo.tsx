import React from 'react';
import Todo from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './singleTodo.css';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <form className='todo-single'>
      <span className='todo-single-text'>{todo.todo}</span>
      <div>
        <span className='icon'>
          {' '}
          <AiFillEdit />
        </span>
        <span className='icon'>
          <AiFillDelete />
        </span>
        <span className='icon'>
          <MdDone />
        </span>
      </div>
    </form>
  );
};
