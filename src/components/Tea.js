import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

function Tea(props){
  return (
    <div className="border border-secondary text-center">
      <div>
        <h3>{props.name}</h3>
        <p>Type: {props.type}</p>
        <p>Origin: {props.origin}</p>
        <p>Price: {props.price}</p>
        <p>Quantity left: {props.quantity}/130</p>
        <button onClick = {() => props.whenTeaClicked(props.id)}> Details </button>
      </div>
      <hr/>
      <button onClick = {() => props.whenTeaSold(props.id)}> SELL </button>
      <hr/>
    </div>
  );
}

Tea.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenTeaClicked: PropTypes.func,
  whenTeaSold: PropTypes.func
};

export default Tea;