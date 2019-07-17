import React, { Component } from 'react';
import style from './Themes.module.css';

class Themes extends Component {
  constructor(props) {
    super(props);

    this.setTheme = this.setTheme.bind(this);
  };

  setTheme(e) {
    this.props.setTheme(e.target.value);
  };

  render() {
    return (
      <div>
        <div className={style.header}><h4>Themes . Selected theme - {this.props.theme}</h4></div>
        <div onChange={this.setTheme}>
          <div><input type="radio" value="default" name="theme" defaultChecked /> - Default</div>
          <div><input type="radio" value="dark" name="theme" /> - Dark</div>
          <div><input type="radio" value="light" name="theme" /> - Light</div>
          <div><input type="radio" value="brown" name="theme" /> - Brown</div>
          <div><input type="radio" value="sunrise" name="theme" /> - Sunrise</div>
          <div><input type="radio" value="seawave" name="theme" /> - Seawave</div>
        </div>
      </div>
    );
  };
};

export default Themes;