import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick, onTodoRemove }) => (
  <section className="main">
    <input className="toggle-all" type="checkbox" />
    <ul className="todo-list">
      {todos.map(t => {
        return (
          <Todo
            key={t.id}
            {...t}
            onClick={() => onTodoClick(t.id)}
            onRemove={() => onTodoRemove(t.id)}
          />
        );
      })}
    </ul>
  </section>
);

export default TodoList;
