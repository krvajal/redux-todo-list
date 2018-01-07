import React from "react";
import FilterLink from "./FilterLink";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    activeCount: state.todos.filter(t => !t.completed).length
  };
};
const Footer = ({ visibilityFilter, onFilterClick, activeCount }) => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{activeCount}</strong>{" "}
      {`item${activeCount !== 1 ? "s" : ""} left`}
    </span>
    <ul className="filters">
      <li>
        <FilterLink filter="SHOW_ALL">All</FilterLink>
      </li>
      <li>
        <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
      </li>
      <li>
        <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
      </li>
    </ul>
    <button className="clear-completed">Clear completed</button>
  </footer>
);

export default connect(mapStateToProps, dispatch => ({}))(Footer);
