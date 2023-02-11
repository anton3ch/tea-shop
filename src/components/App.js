import React from "react";
import Header from "./Header";
import TeaControl from "./TeaControl";
import bg from "./../img/bg.jpg";


function App(){
  return ( 
    <div style={{ 
      backgroundImage: `url(${bg})`,
      backgroundRepeat: 'no-repeat'
    }} className="container">
      <Header />
      <TeaControl />
    </div>
  );
}


export default App;
