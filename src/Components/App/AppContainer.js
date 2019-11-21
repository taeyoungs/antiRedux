import React, { Component } from 'react';
import AppPresenter from './AppPresenter';
import Store from 'store';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this._changeMessage = () => {
      if (this.state.message === 'HELLO') {
        this.setState({
          message: 'BYE BYE',
        });
      } else {
        this.setState({
          message: 'HELLO',
        });
      }
    };
    this.state = {
      message: 'HELLO',
      changeMessage: this._changeMessage,
    };
  }
  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
