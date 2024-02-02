import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import '../stile-sheets/ToDoForm.css'

function ToDoForm(props) {

  const [input, setInput] = useState('');

  const changeManagement = (e) => {
    setInput(e.target.value);
  };

  const sendManagement = (e) => {
    e.preventDefault();

    const newToDo = {
      id: uuidv4(),
      text: input,
      finished: false
    };

    props.onSubmit(newToDo);
  };

  return (
    <form 
      className='todo-form'
      onSubmit={sendManagement}
    >
      <input
        className='todo-input'
        type='text'
        placeholder='Write a ToDo'
        name='text'
        onChange={changeManagement}
      />
      <button 
        className='todo-button'
      >
        Add ToDo
      </button>
    </form>
  );
}

export default ToDoForm;