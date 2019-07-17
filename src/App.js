import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import TextInput from './components/TextInput';
import Switcher from './components/Switcher';

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
      isView: true
    };

    this.changeText = this.changeText.bind(this);
    this.clearText = this.clearText.bind(this);
    this.changeView = this.changeView.bind(this);
    this.setConverter = this.setConverter.bind(this);
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

  render() {
    return (
      <div>
        {this.state.isView &&
          <div>
            <div>
              <Display
                text={this.state.text}
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
          </div>
        }
        <div>
          <Switcher
            text={this.state.isView ? "скрыть" : "показать"}
            switchView={this.changeView}
          />
        </div>
      </div>
    );
  };
};

export default App;