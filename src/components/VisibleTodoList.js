import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoList from "./TodoList";
import { getVisibleTodos } from "../lib/utils";
import { connect } from "react-redux";

const mapStateToProps = ({ todos, visibilityFilter }) => {
  return {
    todos: getVisibleTodos(todos, visibilityFilter)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch({
        type: "TOGGLE_TODO",
        id
      });
    },
    onTodoRemove: id => {
      dispatch({
        type: "REMOVE_TODO",
        id
      });
    }
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default VisibleTodoList;
