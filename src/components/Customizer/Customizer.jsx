import React from 'react';
import style from './Customizer.module.css';

const Customizer = () => {
  return (
    <div>
      <div className={style.header}><h4>Customizer</h4></div>
      <div>
        <div>
          <select className={style.customSelect}>
            <option>Black</option>
            <option>White</option>
            <option>Orange</option>
            <option>Grey</option>
            <option>Green</option>
            <option>Blue</option>
          </select> : Text Color
        </div>
      </div>
      <div>
        <div>
          <select className={style.customSelect}>
            <option>White</option>
            <option>Black</option>
            <option>Grey</option>
            <option>Brown</option>
            <option>Orange</option>
            <option>Blue</option>
          </select> : Backgrount
        </div>
      </div>
      <div>
        <div>
          <select className={style.customSelect}>
            <option>16px</option>
            <option>20px</option>
            <option>24px</option>
            <option>28px</option>
            <option>32px</option>
            <option>36px</option>
          </select> : Font Size
        </div>
      </div>
      <div>
        <div>
          <select className={style.customSelect}>
            <option>normal</option>
            <option>bold</option>
          </select> : Font Weight
        </div>
      </div>
    </div>
  );
};

export default Customizer;