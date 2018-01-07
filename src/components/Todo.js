import React, { Component } from "react";
import classNames from "classnames";

class Todo extends Component {
  state = {
    editing: false
  };
  componentDidUpdate() {
    if (this.state.editing) {
      this.editField.focus();
    }
  }
  render() {
    const { onClick, completed, text, onRemove } = this.props;

    const className = classNames("todo", {
      completed,
      editing: this.state.editing
    });
    return (
      <li className={className}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={onClick}
            checked={completed}
          />
          <label onDoubleClick={() => this.setState({ editing: true })}>
            {text}
          </label>
          <button className="destroy" onClick={onRemove} />
        </div>
        <input
          className="edit"
          type="text"
          ref={node => (this.editField = node)}
          defaultValue={text}
          onBlur={() => this.setState({ editing: false })}
          onKeyUp={this.onKeyUp}
        />
      </li>
    );
  }
  onKeyUp = evt => {
    switch (evt.key) {
      case "Enter":
        this.props.onEdit(this.editField.value);
      case "Escape":
        this.setState({ editing: false });
      default:
        return;
    }
  };
}

export default Todo;
