import React from 'react';
import style from './Checkbox.module.css';

const Checkbox = () => {
  return (
    <div>
      <input type='checkbox' />
      <p className={style.info}>Это чекбокс - он ставит метку</p>
    </div>
  );
};

export default Checkbox;