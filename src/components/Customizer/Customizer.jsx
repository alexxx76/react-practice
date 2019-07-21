import React from 'react';
import style from './Customizer.module.css';

const Customizer = (props) => {
  return (
    <div>
      <div className={style.header}><h4>Customizer</h4></div>
      <div>
        <div>
          <select
            className={style.customSelect}
            onChange={(e) => props.setColor(e.target.value)}
          >
            <option value="#000">Black</option>
            <option value="#fff">White</option>
            <option value="#fa0">Orange</option>
            <option value="#ccc">Grey</option>
            <option value="#0a0">Green</option>
            <option value="#00f">Blue</option>
          </select> : Text Color
        </div>
      </div>
      <div>
        <div>
          <select
            className={style.customSelect}
            onChange={(e) => props.setBackground(e.target.value)}
          >
            <option value="#fff">White</option>
            <option value="#000">Black</option>
            <option value="#ccc">Grey</option>
            <option value="#a30">Brown</option>
            <option value="#fa0">Orange</option>
            <option value="#00f">Blue</option>
          </select> : Backgrount
        </div>
      </div>
      <div>
        <div>
          <select
            className={style.customSelect}
            onChange={(e) => props.setFontSize(e.target.value)}
          >
            <option value="16px">16px</option>
            <option value="20px">20px</option>
            <option value="24px">24px</option>
            <option value="28px">28px</option>
            <option value="32px">32px</option>
            <option value="36px">36px</option>
          </select> : Font Size
        </div>
      </div>
      <div>
        <div>
          <select
            className={style.customSelect}
            onChange={(e) => props.setFontWeight(e.target.value)}
          >
            <option value="300">normal</option>
            <option value="600">bold</option>
          </select> : Font Weight
        </div>
      </div>
    </div>
  );
};

export default Customizer;