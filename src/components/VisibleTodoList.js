import React from "react";
import PropTypes from "prop-types";
import TodoList from "./TodoList";
import { getVisibleTodos } from "../reducers";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  toggleTodoAction,
  deleteTodoAction,
  toggleAllAction,
  editTodoAction
} from "../actionCreators";

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state, ownProps.match.params.filter || "all")
});

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodoAction(id));
    },
    onTodoRemove: id => {
      dispatch(deleteTodoAction(id));
    },
    onTodoEdit: (id, text) => {
      dispatch(editTodoAction(id, text));
    },
    onToggleAllClick: () => {
      dispatch(toggleAllAction());
    }
  };
};

const VisibleTodoList = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TodoList)
);
export default VisibleTodoList;
