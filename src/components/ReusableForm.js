import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Tea Name' />
        <input
          type='text'
          name='type'
          placeholder='Tea Type' />
        <textarea
          name='origin'
          placeholder='Tea Origin' />
        <input
          type='number'
          name='price'
          placeholder='5' />
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