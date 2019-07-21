import React from 'react';
import style from './Toggle.module.css';

const Toggle = (props) => {
  return (
    <button
      className={style.reset}
      onClick={props.toggle}
    >
      {`${props.actText} ${props.text}`}
    </button>
  );
};

export default Toggle;