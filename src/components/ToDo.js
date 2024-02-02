import React from 'react';
import '../stile-sheets/ToDo.css'

function ToDo( {text} ) {
  return (
    <div className='todo-wrapper'>
      <div className='todo-text'>
        {text}
      </div>
      <div className='todo-icon'>
        Delete
      </div>
    </div>
  );
}

export default ToDo;