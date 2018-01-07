import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoList from "./TodoList";
import { getVisibleTodos } from "../lib/utils";
import { connect } from "react-redux";
import { toggleTodoAction, deleteTodoAction } from "../actionCreators";

const mapStateToProps = ({ todos, visibilityFilter }) => {
  return {
    todos: getVisibleTodos(todos, visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodoAction(id));
    },
    onTodoRemove: id => {
      dispatch(deleteTodoAction(id));
    }
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default VisibleTodoList;
