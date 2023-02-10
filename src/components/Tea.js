import React from "react";
import PropTypes from "prop-types";

function Tea(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTeaClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>Type:{props.type}</p>
        <p>Origin:{props.origin}</p>
        <p>Price:{props.price}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  whenTeaClicked: PropTypes.func
};

export default Tea;