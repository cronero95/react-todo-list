import React from 'react';
import '../stile-sheets/ToDo.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function ToDo( {id, text, finished, finishToDo, deleteToDo} ) {
  return (
    <div className={finished ? 'todo-wrapper finished' : 'todo-wrapper'}>
      <div 
        className='todo-text'
        onClick={() => finishToDo(id)}
      >
        {text}
      </div>
      <div className='todo-icon-wrapper'>
        {/* It's possible to assign a className because of the package configuration, 
        in other components this is just a prop, so won't work. */}
        <AiOutlineCloseCircle 
          className='todo-icon'
          onClick={() => deleteToDo(id)}
        />
      </div>
    </div>
  );
}

export default ToDo;