import React from "react";

const Link = ({ active, onClick, children }) => {
  return (
    <a
      className={active ? "selected" : null}
      href="#"
      onClick={evt => {
        evt.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

export default Link;
