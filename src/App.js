import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import TextInput from './components/TextInput';
import Switcher from './components/Switcher';
import Themes from './components/Themes';
import Toggle from './components/Toggle';
import Customizer from './components/Customizer';
import Countdown from './components/Countdown/Countdown';
import DonutChart from './components/DonutChart';

const dateX = {
  year: 2020,
  month: 0,
  day: 9,
  hour: 0,
  minute: 0,
  second: 0
};

const themes = {
  default: {
    color: '#777',
    background: '#eee',
    fontSize: '16px',
    fontWeight: '300'
  },
  dark: {
    color: '#ccc',
    background: '#000',
    fontSize: '24px',
    fontWeight: '600'
  },
  light: {
    color: '#000',
    background: '#fff',
    fontSize: '20px',
    fontWeight: '300'
  },
  brown: {
    color: '#fa0',
    background: '#a30',
    fontSize: '32px',
    fontWeight: '600'
  },
  sunrise: {
    color: '#fff',
    background: '#fa0',
    fontSize: '24px',
    fontWeight: '300'
  },
  seawave: {
    color: '#0a0',
    background: '#00f',
    fontSize: '36px',
    fontWeight: '300'
  }
};

const upperFirstLetter = text => text.split('')
  .map((item, i) => i === 0 ? item.toUpperCase() : item.toLowerCase())
  .join('');

const textConvert = (text, mode) => {
  let result = '';
  if (text[mode]) {
    result = text[mode]();
  } else if (mode === 'capitalize') {
    result = text.split(' ')
      .map(item => upperFirstLetter(item))
      .join(' ');
  } else {
    result = text.split(' ')
      .map((item, i) => i === 0 ? upperFirstLetter(item) : item.toLowerCase())
      .join(' ');
  }
  return result;
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      isCountdown: true,
      text: 'Text for displaying',
      isView: true,
      theme: 'default',
      layout: {
        color: '#777',
        background: '#eee',
        fontSize: '16px',
        fontWeight: '300'
      }
    };

    this.changeText = this.changeText.bind(this);
    this.clearText = this.clearText.bind(this);
    this.toggleCountdown = this.toggleCountdown.bind(this);
    this.changeView = this.changeView.bind(this);
    this.setConverter = this.setConverter.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.setColor = this.setColor.bind(this);
    this.setBackground = this.setBackground.bind(this);
    this.setFontSize = this.setFontSize.bind(this);
    this.setFontWeight = this.setFontWeight.bind(this);
  }

  changeText(e) {
    this.setState({ text: e.target.value });
  };

  clearText() {
    this.setState({ text: '' });
  };

  toggleCountdown() {
    this.setState({ isCountdown: !this.state.isCountdown });
  }

  changeView() {
    this.setState({ isView: !this.state.isView });
  };

  setConverter(convertMethod) {
    this.setState({ text: textConvert(this.state.text, convertMethod) });
  };

  setTheme(theme) {
    this.setState({ theme: theme });
    this.setState({ layout: themes[theme]});
  };

  setColor(color) {
    this.setState({
      layout: Object.assign({}, this.state.layout, { color: color })
    });
  };

  setBackground(background) {
    this.setState({
      layout: Object.assign({}, this.state.layout, { background: background })
    });
  };

  setFontSize(fontSize) {
    this.setState({
      layout: Object.assign({}, this.state.layout, { fontSize: fontSize })
    });
  };

  setFontWeight(fontWeight) {
    this.setState({
      layout: Object.assign({}, this.state.layout, { fontWeight: fontWeight })
    });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.isCountdown && <Countdown dateX={dateX} />}
        </div>
        <div>
          <Switcher
            text={this.state.isView ? "скрыть" : "показать"}
            switchView={this.changeView}
          />
          <Toggle
            actText={this.state.isCountdown ? "скрыть" : "показать"}
            text="обратный отсчет"
            toggle={this.toggleCountdown}
          />
        </div>
        {this.state.isView &&
          <div>
            <div>
              <Display
                text={this.state.text}
                layout={this.state.layout}
              />
            </div>
            <div>
              <TextInput
                setText={this.changeText}
                clearText={this.clearText}
                value={this.state.text}
                setConverter={this.setConverter}
              />
            </div>
            <div>
              <Themes
                theme={this.state.theme}
                setTheme={this.setTheme}
              />
            </div>
            <div>
              <Customizer
                setColor={this.setColor}
                setBackground={this.setBackground}
                setFontSize={this.setFontSize}
                setFontWeight={this.setFontWeight}
              />
            </div>
            <div style={{width: '300px', marginTop: '20px'}}>
              <DonutChart text="ReactJS" value="83" total="100" />
            </div>
          </div>
        }
      </div>
    );
  };
};

export default App;