import React from "react";

const Todo = ({ onClick, completed, text, onRemove }) => (
  <li className="todo" className={completed ? "completed" : null}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        onChange={onClick}
        checked={completed}
      />
      <label>{text}</label>
      <button className="destroy" onClick={onRemove} />
    </div>
  </li>
);

export default Todo;
