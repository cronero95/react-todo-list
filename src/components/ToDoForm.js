import React from 'react';
import '../stile-sheets/ToDoForm.css'

function ToDoForm(props) {
  return (
    <form className='todo-form'>
      <input
        className='todo-input'
        type='text'
        placeholder='Write a ToDo'
        name='text'
      />
      <button className='todo-button'>
        Add ToDo
      </button>
    </form>
  );
}

export default ToDoForm;