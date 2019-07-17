import React from 'react';
import style from './Display.module.css';

const Display = (props) => {
  return (
    <div className={`${style.display} ${style.startLayout}`}>
      {props.text}
    </div>
  );
};

export default Display;