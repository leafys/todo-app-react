import React from "react";
import "./Header.scss";

const Header = ({ todo, done }) => {
  return (
    <div className="app-header d-flex">
      <h1 className="app-header__title-h1">Todo List</h1>
      <h2 className="app-header__title-h2">
        {todo} more to do, {done} done
      </h2>
    </div>
  );
};

export default Header;
