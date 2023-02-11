import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler} className="text-center">
        <input
          type='text'
          name='name'
          placeholder='Tea Name' 
          className="m-2"
          required/>
          <br/>
        <input
          type='text'
          name='type'
          placeholder='Tea Type' 
          className="m-2"
          required/>
          <br/>
        <input
          type='text'
          name='origin'
          placeholder='Tea Origin' 
          className="m-2"
          required/>
          <br/>
        <input
          type='number'
          name='price'
          placeholder='5' 
          min="1"
          className="m-2"
          required/>
          <br/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;