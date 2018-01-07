import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setVisibilityAction } from "../actionCreators";

const FilterLink = ({ filter, children }) => {
  return (
    <NavLink
      exact={true}
      to={filter === "all" ? "/" : `/${filter}`}
      activeClassName={"selected"}
    >
      {children}
    </NavLink>
  );
};

// const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
export default FilterLink;
