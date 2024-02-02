import React from 'react';
import '../stile-sheets/ToDoList.css'
import ToDoForm from './ToDoForm';

function ToDoList() {
  return (
    <>
      <ToDoForm/>
      <div className='todo-list-wrapper'>
        TODO LIST
      </div>
    </>
  );
}

export default ToDoList;