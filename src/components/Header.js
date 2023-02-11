import React from "react";
import teaImage from "./../img/tea.png";

function Header(){
  return (
    <div className="header">
      <img src={teaImage} alt="Tea" style={{width: 100}} />
      <h1>Tony's teas</h1>
    </div>
  );
}

export default Header;