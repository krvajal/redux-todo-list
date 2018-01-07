import React from "react";

const Todo = ({ onClick, completed, text, onRemove }) => (
  <li className="todo" className={completed ? "completed" : null}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        onClick={onClick}
        value={completed ? "on" : "off"}
      />
      <label>{text}</label>
      <button className="destroy" onClick={onRemove} />
    </div>
  </li>
);

export default Todo;
