import React, { Component } from 'react';
import ReactRadioButtonGroup from 'react-radio-button-group';

const ReviewForm = props => {
  let handleSubmit = (props.newOrUpdate === 'new') ? props.handleNew : props.handleUpdate

  const button = <input
    onClick={(props.newOrUpdate === 'new') ? props.handleCancel : props.handleDelete}
    className="button"
    type="submit"
    value={(props.newOrUpdate === 'new') ? "Cancel" : "Delete"}
    />

  // if (props.newOrUpdate == "new") {
  //   handleSubmit = props.handleNew
  //   cancelButton = <input
  //     onClick = {props.handleCancel}
  //     className="button"
  //     type="submit"
  //     value="Cancel"
  //   />
  //
  // } else if (props.newOrUpdate == "update") {
  //   handleSubmit = props.handleUpdate
  //   deleteButton = <input
  //     onClick = {props.handleDelete}
  //     className="button"
  //     type="submit"
  //     value="Delete"
  //   />
  // }

  return (
    <form className="callout" onSubmit={handleSubmit}>
      <label>
        Rating
        <ReactRadioButtonGroup
          options={['1', '2', '3', '4', '5']}
          name='rating'
          isStateful={false}
          value={props.rating}
          onChange={props.handleRatingChange}
          fireOnMount={true}
        />
      </label>

      <label>Description
        <textarea
          name='description'
          type='text'
          value={props.description}
          onChange={props.handleDescriptionChange}
        />
      </label>

      <div className="button-group">
        <input className="button" type="submit" value="Submit"/>
        {button}
      </div>
    </form>
  );
}

export default ReviewForm;
