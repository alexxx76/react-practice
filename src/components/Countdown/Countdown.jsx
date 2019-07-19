import React, { Component } from 'react';
import style from './Countdown.module.css';

const getDateNow = () => new Date().toLocaleString().split(',').join('');
const getDateSet = (string) => new Date(string).toLocaleString().split(',').join('');
const getDateNowMS = () => new Date().valueOf();
const getDateSetMS = (string) => new Date(string).valueOf();
const getDateDiff = (string) => getDateSetMS(string) - getDateNowMS();
const getDiffSec = (string) => parseInt(getDateDiff(string) / 1000);
const getDiffMin = (string) => parseInt(getDateDiff(string) / 1000 / 60);
const getDiffHour = (string) => parseInt(getDateDiff(string) / 1000 / 60 / 60);
const getDiffDay = (string) => parseInt(getDateDiff(string) / 1000 / 60 / 60 / 24);
const getDiffWeek = (string) => parseInt(getDateDiff(string) / 1000 / 60 / 60 / 24 / 7);
const getDiffMonth = (string) => parseInt(getDateDiff(string) / 1000 / 60 / 60 / 24 / 30);

const formatter = (length, first, last) => {
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

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(this.props.date) };
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
        {this.props.date &&
          <div className={style.sheet}>
            <div className={style.header}>{getDateSet(this.props.date)}</div>
            <div className={style.header}>{getDateNow()}</div>
            <div className={style.list}>
              <div>{formatter(20, 'секунд', getDiffSec(this.props.date))}</div>
              <div>{formatter(20, 'минут', getDiffMin(this.props.date))}</div>
              <div>{formatter(20, 'часов', getDiffHour(this.props.date))}</div>
              <div>{formatter(20, 'дней', getDiffDay(this.props.date))}</div>
              <div>{formatter(20, 'недель', getDiffWeek(this.props.date))}</div>
              <div>{formatter(20, 'месяцев', getDiffMonth(this.props.date))}</div>
            </div>
          </div>
        }
      </div>
    );
  };
};

export default Countdown;