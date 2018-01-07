import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoList from "./TodoList";
import { getVisibleTodos } from "../lib/utils";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  toggleTodoAction,
  deleteTodoAction,
  toggleAllAction
} from "../actionCreators";

const mapStateToProps = ({ todos }, ownProps) => ({
  todos: getVisibleTodos(todos, ownProps.match.params.filter || "all")
});

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodoAction(id));
    },
    onTodoRemove: id => {
      dispatch(deleteTodoAction(id));
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
