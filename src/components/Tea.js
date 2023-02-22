import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

function Tea(props){

  let quantityLeft = null;
  let sellButton = null;
  if(props.quantity > 0) {
    quantityLeft = <p>Quantity left: {props.quantity}/130</p>;
    sellButton = <button onClick = {() => props.whenTeaSold(props.id)}> SELL </button>
  } else {
    quantityLeft = <p>Quantity left: SOLD OUT</p>;
  }
  return (
    <div className="border border-secondary text-center">
      <div>
        <h3>{props.name}</h3>
        <p>Type: {props.type}</p>
        <p>Origin: {props.origin}</p>
        <p>Price: {props.price}</p>
        {quantityLeft}
        <button onClick = {() => props.whenTeaClicked(props.id)}> Details </button>
      </div>
      <hr/>
      {sellButton}
      <hr/>
    </div>
  );
}

Tea.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenTeaClicked: PropTypes.func,
  whenTeaSold: PropTypes.func
};

export default Tea;