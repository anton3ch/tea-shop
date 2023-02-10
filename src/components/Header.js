import React from "react";
import teaImage from "./../img/tea.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>Tony's teas</h1>
      <img src={teaImage} alt="Tea" />
    </React.Fragment>
  );
}

export default Header;