import React from 'react';
import style from './Display.module.css';

const Display = (props) => {
  console.log(props.layout);
  return (
    <div
      className={`${style.display} ${style.startLayout}`}
      style={props.layout}
    >
      {props.text}
    </div>
  );
};

export default Display;