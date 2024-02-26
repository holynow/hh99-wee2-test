import React, { useState } from 'react';
import './reset.css';
import { v4 as uuidv4 } from 'uuid';

const wrap = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  width: "100%",
  padding: "100px 30px",
  textAlign: "center"
}
const h2 = {
  fontSize: "30px",
  fontWeight: "800"
}
const listWrap = {
  width: "100%",
}
const ul = {
  display: "flex",
  gap: "20px",
  width: "100%",
  marginTop: "20px"
}
const li = {
  width: "100px",
  height: "100px",
  padding: "15px",
  border: "1px solid #2fa339",
  borderRadius: "10px"
}

const App = () => {
  const [toDo, setTodo] = useState([])
  const [title, setTitle] = useState('');
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  }
  const onClickAddList = () => {
    if (title.trim() !== '') {
      const newTodo = {
        id: uuidv4(),
        title,
      };
      setTodo([...toDo, newTodo])
    }
  }
  return (
    <div style={wrap}>
      <div>
        <input type="text" value={title} onChange={onChangeTitle} />
        <button onClick={onClickAddList}>추가하기</button>
      </div>
      <div style={listWrap}>
        <h2 style={h2}>Todo List</h2>
        <ul style={ul}>
          {toDo.map((item) => {
            return (
              <li key={item.id} style={li}>
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