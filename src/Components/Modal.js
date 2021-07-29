import React from "react";

function Modal({ onCancel, onConfirm }) {
  return (
    <div className="modal">
      <p>Are You Sure ?</p>
      <button className="btn btn--alt" onClick={onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={onConfirm}>
        Yes
      </button>
    </div>
  );
}

export default Modal;
