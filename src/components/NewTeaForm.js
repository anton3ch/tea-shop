import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

export default function NewTeaForm(props){

  function handleNewTeaFormSubmission(event) {
    event.preventDefault();
    props.onNewTeaCreation({
      name: event.target.name.value, 
      type: event.target.type.value, 
      origin: event.target.origin.value, 
      price: event.target.price.value,
      quantity: 130,  
      id: v4 ()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTeaFormSubmission}
        buttonText="Add Tea" />
    </React.Fragment>
  );

}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
};


