import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodoAction } from "../actionCreators";

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <header className="header">
      <h1>TODOS</h1>
      <form
        onSubmit={evt => {
          evt.preventDefault();
          dispatch(addTodoAction(input.value));
          input.value = "";
        }}
      >
        <input className="new-todo" ref={node => (input = node)} />
      </form>
    </header>
  );
};

export default connect()(AddTodo);
