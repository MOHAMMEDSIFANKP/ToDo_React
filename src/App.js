import React, { useState } from 'react';
import './App.css';
function App() {
  const [toDos,setTodos] = useState([])
  const [toDO,setTodo] = useState('')
  const setArray = ()=>{
    const existsTodo = toDos.find(toDos=>toDos.text === toDO)
    if (existsTodo){
      alert("already exists!");
    }else{
    setTodos([...toDos,{id:Date.now(),text:toDO,status:false}])
  };
  }
  const removeElement =(id)=>{
    setTodos(toDos.filter(todo=>todo.id!=id))
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDO.text} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={setArray} className="fas fa-plus"></i>
      </div>
      <div className="todos">
       { toDos.map((obj)=>{
       return(<div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              setTodo(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))
            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times" onClick={()=>removeElement(obj.id)}></i>
          </div>
        </div>)
        })}
       {toDos.map((obj)=>{
        if(obj.status){
          return( <h1>{obj.text}</h1>)
        }
       })}
      </div>
    </div>
  );
}
export default App;