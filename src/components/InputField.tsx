import React from 'react';
import './inputField.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
  console.log(todo);
  return (
    <form className='input'>
      <input
        type='input'
        className='input-box'
        placeholder='Enter a text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className='input-submit'>Go</button>
    </form>
  );
};

export default InputField;
