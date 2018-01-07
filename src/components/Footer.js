import React from "react";
import FilterLink from "./FilterLink";
const Footer = ({ visibilityFilter, onFilterClick }) => (
  <footer className="footer">
    <span className="todo-count">
      <strong> 1</strong> item left
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

export default Footer;
