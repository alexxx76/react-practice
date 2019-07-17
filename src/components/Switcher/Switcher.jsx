import React from 'react';
import style from './Switcher.module.css';

const Switcher = (props) => {
  return (
    <button
      className={style.switcher}
      onClick={props.switchView}
    >
      {props.text}
    </button>
  );
};

export default Switcher;