import React, { useEffect, useRef, useState } from 'react';
import Todo from '../model';
import { AiFillEdit, AiFillDelete, AiOutlineFileDone } from 'react-icons/ai';
import { GiConfirmed } from 'react-icons/gi';
import './singleTodo.css';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<Boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  //-----------------------------------------------------------------------------------
  const handleDelete = (id: number) => {
    const remainingTodos = todos.filter((todo) => todo.id !== id);
    setTodos(remainingTodos);
  };
  //------------------------------------------------------------------------------------
  const handleDone = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <form className='todo-single' onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          type='text'
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className='todo-single-edit-text'
          ref={inputRef}
        />
      ) : todo.isDone ? (
        <s className='todo-single-text'>{todo.todo}</s>
      ) : (
        <span className='todo-single-text'>{todo.todo}</span>
      )}

      <div>
        {edit ? (
          <button type='submit' className='icon submit-icon'>
            <GiConfirmed />
          </button>
        ) : (
          <span
            className='icon'
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          >
            {' '}
            <AiFillEdit />
          </span>
        )}
        <span className='icon' onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className='icon' onClick={() => handleDone(todo.id)}>
          <AiOutlineFileDone />
        </span>
      </div>
    </form>
  );
};
