import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import TextInput from './components/TextInput';
import Switcher from './components/Switcher';
import Themes from './components/Themes';
import MainReset from './components/MainReset';
import Customizer from './components/Customizer';

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
      text: 'Text for displaying',
      isView: true,
      theme: 'default',
      defaultLayout: {
        color: '#777',
        background: '#eee',
        fontSize: '16px',
        fontWeight: '300'
      }
    };

    this.changeText = this.changeText.bind(this);
    this.clearText = this.clearText.bind(this);
    this.changeView = this.changeView.bind(this);
    this.setConverter = this.setConverter.bind(this);
    this.setTheme = this.setTheme.bind(this);
  }

  changeText(e) {
    this.setState({ text: e.target.value });
  };

  clearText() {
    this.setState({ text: '' });
  };

  changeView() {
    this.setState({ isView: !this.state.isView });
  };

  setConverter(convertMethod) {
    this.setState({ text: textConvert(this.state.text, convertMethod) });
  };

  setTheme(theme) {
    this.setState({ theme: theme });
    console.log('App - ', theme, this.state.theme);
  }

  render() {
    return (
      <div>
        <div>
          <Switcher
            text={this.state.isView ? "скрыть" : "показать"}
            switchView={this.changeView}
          />
          <MainReset />
        </div>
        {this.state.isView &&
          <div>
            <div>
              <Display
                text={this.state.text}
                layout={this.state.defaultLayout}
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
              <Customizer />
            </div>
          </div>
        }
      </div>
    );
  };
};

export default App;