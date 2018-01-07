import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "./Link";
import { connect } from "react-redux";
import { setVisibilityAction } from "../actionCreators";
const mapStateToProps = (state, ownProps) => {
  return {
    active: state.visibilityFilter === ownProps.filter
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setVisibilityAction(ownProps.filter))
  };
};
const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
export default FilterLink;
