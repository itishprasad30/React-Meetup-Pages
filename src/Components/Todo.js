import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [count, setCount] = useState(5);
  const [theme, setTheme] = useState("Blue");

  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeHandler() {
    setModalIsOpen(false);
  }
  function decrementCount() {
    setCount((prev) => prev - 1);
    console.log("Count is :", count);
  }
  function incrementCount() {
    setCount((prev) => prev + 1);
    setTheme("red");
  }

  return (
    <div className="card">
      <h3>Titles</h3>
      <h4>{props.text}</h4>
      <div className="actions">
        <span>A span</span>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      <div>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={incrementCount}>+</button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeHandler} onConfirm={closeHandler} />
      )}
      {modalIsOpen && <Backdrop onClick={closeHandler} />}
    </div>
  );
}

export default Todo;
