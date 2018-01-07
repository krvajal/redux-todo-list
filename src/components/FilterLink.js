import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "./Link";

class FilterLink extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsuscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }
  componentWillUnmount() {
    this.unsuscribe();
  }

  render() {
    const { children, filter } = this.props;
    const { store } = this.context;
    const state = store.getState();
    return (
      <Link
        active={filter === state.visibilityFilter}
        onClick={() =>
          store.dispatch({
            type: "SET_VISIBILITY_FILTER",
            filter
          })
        }
      >
        {children}
      </Link>
    );
  }
}

FilterLink.contextTypes = {
  store: PropTypes.object
};

export default FilterLink;
