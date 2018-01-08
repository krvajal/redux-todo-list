import React from "react";
import { connect } from "react-redux";
import { addTodoAction } from "../actionCreators";

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <form
      onSubmit={evt => {
        evt.preventDefault();
        dispatch(addTodoAction(input.value));
        input.value = "";
      }}
    >
      <input
        className="new-todo"
        ref={node => (input = node)}
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default connect()(AddTodo);
