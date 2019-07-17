import React, { Component } from 'react';
import style from './TextInput.module.css';

class TextInput extends Component {
  constructor() {
    super();

    this.getConverter = this.getConverter.bind(this);
  };

  getConverter(e) {
    console.log(e.target.value);
    this.props.setConverter(e.target.value);
  };
  
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            className={style.input}
            onChange={this.props.setText}
            value={this.props.value}
          />
        </div>
        <div>
          <button
            className={style.clean}
            onClick={this.props.clearText}
          >
            сбросить
          </button>
        </div>
        <div onChange={this.getConverter}>
          <div><input type="radio" value="default" name="converter" defaultChecked /> - Default</div>
          <div><input type="radio" value="toLowerCase" name="converter" /> - LowerCase</div>
          <div><input type="radio" value="toUpperCase" name="converter" /> - UpperCase</div>
          <div><input type="radio" value="capitalize" name="converter" /> - Capitalize</div>
        </div>
      </div>
    );
  };
};

export default TextInput;