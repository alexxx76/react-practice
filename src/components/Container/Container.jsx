import React from 'react';
import style from './Container.module.css';
import Button from '../Button';
import Checkbox from '../Checkbox';

const Container = () => {
  return (
    <div className={style.container}>
      <h1>Container</h1>
      <Button />
      <Checkbox />
    </div>
  );
};

export default Container;