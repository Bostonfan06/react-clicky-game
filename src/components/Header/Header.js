import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Your Score: {props.score} Highest Score: {props.highscore}
    </div>
  </div>
);

export default Header;