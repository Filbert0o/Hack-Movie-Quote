import React, { Component } from 'react';

const Question = (props) => {
  return (
    <li className="list-group-item">
      {props.quote}
    </li>
  );
}

export default Question;
