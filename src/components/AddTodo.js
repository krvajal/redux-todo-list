import React from "react";
import PropTypes from "prop-types";

let nextTodoId = 0;

const AddTodo = ({}, { store }) => {
  let input;
  return (
    <header className="header">
      <h1>TODOS</h1>
      <form
        onSubmit={evt => {
          evt.preventDefault();
          store.dispatch({
            type: "ADD_TODO",
            id: nextTodoId++,
            text: input.value
          });
          input.value = "";
        }}
      >
        <input className="new-todo" ref={node => (input = node)} />
      </form>
    </header>
  );
};
AddTodo.contextTypes = {
  store: PropTypes.object
};
export default AddTodo;
