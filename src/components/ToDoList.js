import React from 'react';
import { useState } from 'react';
import '../stile-sheets/ToDoList.css'
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

function ToDoList() {

  const [toDoList, setToDoList] = useState([]);

  const addToDo = (toDo) => {
    if(toDo.text.trim()) {
      toDo.text = toDo.text.trim();
      
      const toDoListUpdated = [toDo, ...toDoList];
      setToDoList(toDoListUpdated);
    }
  };

  const deleteToDo = (id) => {
    const toDoListUpdated = toDoList.filter(toDo => toDo.id !== id);
    setToDoList(toDoListUpdated);
  };

  const finishToDo = (id) => {
    const toDoListUpdated = toDoList.map(toDo => {
      if (toDo.id === id) {
        toDo.finished = !toDo.finished;
      }
      return toDo;
    });
    setToDoList(toDoListUpdated);
  };

  return (
    <>
      <ToDoForm onSubmit={addToDo}/>
      <div className='list-wrapper'>
        {
          toDoList.map((toDo) => 
            <ToDo
              key={toDo.id}
              id={toDo.id}
              text={toDo.text}
              finished={toDo.finished}
              deleteToDo={deleteToDo}
              finishToDo={finishToDo}
            />
          )
        }
      </div>
    </>
  );
}

export default ToDoList;