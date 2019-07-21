import React from 'react';
import style from './MainReset.module.css';

const MainReset = (props) => {
  return (
    <button
      className={style.reset}
      onClick={props.mainReset}
    >
      сбросить все данные
    </button>
  );
};

export default MainReset;