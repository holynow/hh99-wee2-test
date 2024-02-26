import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css'

const App = () => {
  const [toDo, setTodo] = useState([])
  const [title, setTitle] = useState('');
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  }
  const onClickAddList = () => {
    if(title.trim() !== ''){
      const newTodo = {
        id: uuidv4(),
        title,
      };
      setTodo([...toDo, newTodo])
    }
  }
  return (
    <div className='wrap'>
      <div>
        <input type="text" value={title} onChange={onChangeTitle}/>
        <button onClick={onClickAddList}>추가하기</button>
      </div>
      <div className='list-wrap'>
        <h2 className="title">Todo List</h2>
        <ul className='list-group'>
          {toDo.map((item)=> {
            return(
            <li key={item.id} className='list-item'>
              <p>{item.title}</p>
            </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App