import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

let nextTodoId = 0;

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <header className="header">
      <h1>TODOS</h1>
      <form
        onSubmit={evt => {
          evt.preventDefault();
          dispatch({
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

export default connect()(AddTodo);
