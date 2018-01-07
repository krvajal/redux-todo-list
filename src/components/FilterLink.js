import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "./Link";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.visibilityFilter === ownProps.filter
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () =>
      dispatch({
        type: "SET_VISIBILITY_FILTER",
        filter: ownProps.filter
      })
  };
};
const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
export default FilterLink;
