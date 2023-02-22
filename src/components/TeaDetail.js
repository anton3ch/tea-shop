import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  const { tea, onClickingDelete } = props;
  
  let quantityLeft = null;
  if(tea.quantity > 0) {
    quantityLeft = <li>Quantity left: {tea.quantity}/130</li>;
  } else {
    quantityLeft = <li>Quantity left: SOLD OUT</li>;
  }


  return (
    <React.Fragment>
      <h1>Tea Details:</h1>
      <h3>{tea.name}</h3>
      <ul>
        <li>Type: {tea.type}</li>
        <li>Origin: {tea.origin}</li>
        <li>Price: ${tea.price}</li>
        {quantityLeft}
      </ul>
      <button onClick={ props.onClickingEdit }>Update tea</button>
      <button onClick={()=> props.onClickingDelete(tea.id) }>Remove tea</button>
      <hr/>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TeaDetail;