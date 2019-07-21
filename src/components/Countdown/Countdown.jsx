import React, { Component } from 'react';
import style from './Countdown.module.css';


class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateX: this.getDateX(Object.assign({}, this.props.dateX)),
      date: new Date(),
      mode: 's'
    };

    this.setMode = this.setMode.bind(this);
  };

  getDateX = ({ year, month, day, hour, minute, second }) => {
    return new Date(year, month, day, hour, minute, second);
  };
  getDateText = () => new Date().toLocaleString().split(',').join('');
  getDateXText = () => this.state.dateX.toLocaleString().split(',').join('');
  getDateMS = () => this.state.date.valueOf();
  getDateXMS = () => this.state.dateX.valueOf();
  getDateDiff = () => this.getDateXMS() - this.getDateMS();
  getDiffSec = () => parseInt(this.getDateDiff() / 1000);
  getDiffMin = () => parseInt(this.getDateDiff() / 1000 / 60);
  getDiffHour = () => parseInt(this.getDateDiff() / 1000 / 60 / 60);
  getDiffDay = () => parseInt(this.getDateDiff() / 1000 / 60 / 60 / 24);
  getDiffWeek = () => parseInt(this.getDateDiff() / 1000 / 60 / 60 / 24 / 7);
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

  setMode(e) {
    this.setState({ mode: e.target.innerText });
  };

  isMode(value) {
    return this.state.mode === value ? true : false;
  }

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
              {this.isMode('s') &&
                <div>{this.formatter(19, 'секунд', this.getDiffSec(this.state.dateX))}</div>
              }
              {this.isMode('m') &&
                <div>{this.formatter(19, 'минут', this.getDiffMin(this.state.dateX))}</div>
              }
              {this.isMode('H') &&
                <div>{this.formatter(19, 'часов', this.getDiffHour(this.state.dateX))}</div>
              }
              {this.isMode('D') &&
                <div>{this.formatter(19, 'дней', this.getDiffDay(this.state.dateX))}</div>
              }
              {this.isMode('W') &&
                <div>{this.formatter(19, 'недель', this.getDiffWeek(this.state.dateX))}</div>
              }
              {this.isMode('M') &&
                <div>{this.formatter(19, 'месяцев', this.getDiffMonth(this.state.dateX))}</div>
              }
            </div>
            <div className={style.control}>
              <button
                onClick={this.setMode}
                className={(this.isMode('s') ? style.active : style.inactive)}
                title="секунды"
              >s</button>
              <button
                onClick={this.setMode}
                className={(this.isMode('m') ? style.active : style.inactive)}
                title="минуты"
              >m</button>
              <button
                onClick={this.setMode}
                className={(this.isMode('H') ? style.active : style.inactive)}
                title="часы"
              >H</button>
              <button
                onClick={this.setMode}
                className={(this.isMode('D') ? style.active : style.inactive)}
                title="дни"
              >D</button>
              <button
                onClick={this.setMode}
                className={(this.isMode('W') ? style.active : style.inactive)}
                title="недели"
              >W</button>
              <button
                onClick={this.setMode}
                className={(this.isMode('M') ? style.active : style.inactive)}
                title="месяцы"
              >M</button>
            </div>
          </div>
        }
      </div>
    );
  };
};

export default Countdown;