import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Counter from "./components/Counter.jsx";
import Modal from "./components/Modal.jsx";
import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false)

  function onTodoDelete() {
    setShowModal(true)
  }
  function onTodoConfirm() {
    console.log("confirmed")
    setShowModal(false)
  }
  
  return (
    <>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => {
          setShowModal(true)
        }}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish FES" />
        <Todo onTodoDelete={onTodoDelete} title="Finish Interview section" />
        <Todo onTodoDelete={onTodoDelete} title="Land $100k job" />
      </div>
      {showModal && <Modal confirm={onTodoConfirm} title="Are you sure?" no="Cancel" yes="Confirm"/>}
      <Counter />
    </>
  );
}

export default App;
