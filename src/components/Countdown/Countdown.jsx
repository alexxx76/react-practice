import React, { Component } from 'react';
import style from './Countdown.module.css';


class Countdown extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.dateX);
    this.state = {
      dateX: this.getDateX(Object.assign({}, this.props.dateX)),
      date: new Date()
    };
    console.log(this.state);
  };

  getDateX = ({ year, month, day, hour, minute, second }) => {
    console.log(year, month, day, hour, minute, second);
    return new Date(year, month, day, hour, minute, second);
  };
  getDateText  = () => new Date().toLocaleString().split(',').join('');
  getDateXText = () => this.state.dateX.toLocaleString().split(',').join('');
  getDateMS    = () => this.state.date.valueOf();
  getDateXMS   = () => this.state.dateX.valueOf();
  getDateDiff  = () => this.getDateXMS() - this.getDateMS();
  getDiffSec   = () => parseInt(this.getDateDiff() / 1000);
  getDiffMin   = () => parseInt(this.getDateDiff() / 1000 / 60);
  getDiffHour  = () => parseInt(this.getDateDiff() / 1000 / 60 / 60);
  getDiffDay   = () => parseInt(this.getDateDiff() / 1000 / 60 / 60 / 24);
  getDiffWeek  = () => parseInt(this.getDateDiff() / 1000 / 60 / 60 / 24 / 7);
  getDiffMonth = () => parseInt(this.getDateDiff() / 1000 / 60 / 60 / 24 / 30);
  
  formatter = (length, first, last) => {
    last = (() => {
      let chars = (last + '').split('');
      for (let i = (chars.length - 1), j = 1; i > 0; i-- , j++) {
        if (j % 3 === 0) chars[i] = '.' + chars[i];
      }
      chars = chars.join('');
      return chars;
    })();
    const sumLen = () => first.length + (last + '').length;
    const getRepeat = () => (length - sumLen() > 1) ? (length - sumLen()) : 1;
    return `${first}${'\u00A0'.repeat(getRepeat())}${last}`;
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      500
    );
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  };

  tick() {
    this.setState({
      date: new Date()
    });
  };

  render() {
    return (
      <div className={style.countdown}>
        {this.props.dateX &&
          <div className={style.sheet}>
            <div className={style.header}>{this.getDateXText(this.state.dateX)}</div>
            <div className={style.header}>{this.getDateText()}</div>
            <div className={style.list}>
              <div>{this.formatter(20, 'секунд', this.getDiffSec(this.state.dateX))}</div>
              <div>{this.formatter(20, 'минут', this.getDiffMin(this.state.dateX))}</div>
              <div>{this.formatter(20, 'часов', this.getDiffHour(this.state.dateX))}</div>
              <div>{this.formatter(20, 'дней', this.getDiffDay(this.state.dateX))}</div>
              <div>{this.formatter(20, 'недель', this.getDiffWeek(this.state.dateX))}</div>
              <div>{this.formatter(20, 'месяцев', this.getDiffMonth(this.state.dateX))}</div>
            </div>
          </div>
        }
      </div>
    );
  };
};

export default Countdown;