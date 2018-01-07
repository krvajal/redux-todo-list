import React from "react";
import FilterLink from "./FilterLink";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getActiveTodoCount, getCompletedTodoCount } from "../reducers";
const mapStateToProps = state => {
  return {
    activeCount: getActiveTodoCount(state),
    showClearButton: getCompletedTodoCount(state) > 0
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onClearCompletedClick: () => {
      dispatch({ type: "CLEAR_COMPLETED" });
    }
  };
};
const Footer = ({
  visibilityFilter,
  onFilterClick,
  activeCount,
  onClearCompletedClick,
  showClearButton,
  location
}) => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{activeCount}</strong>{" "}
      {`item${activeCount !== 1 ? "s" : ""} left`}
    </span>
    <ul className="filters">
      <li>
        <FilterLink filter="all">All</FilterLink>
      </li>
      <li>
        <FilterLink filter="active">Active</FilterLink>
      </li>
      <li>
        <FilterLink filter="completed">Completed</FilterLink>
      </li>
    </ul>
    {showClearButton && (
      <button className="clear-completed" onClick={onClearCompletedClick}>
        Clear completed
      </button>
    )}
  </footer>
);

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
