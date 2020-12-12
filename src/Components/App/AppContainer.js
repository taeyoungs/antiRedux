import React, { Component } from 'react';
import AppPresenter from './AppPresenter';
import Store from 'store';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this._deleteNotification = id => {
      this.setState(currentState => {
        console.log(currentState);
        const newState = delete currentState.notifications[id];
        return newState;
      });
    };
    this._seeNotification = id => {
      this.setState(currentState => {
        return {
          ...currentState,
          notifications: {
            ...currentState.notifications,
            [id]: { ...currentState.notifications[id], seen: true },
          },
        };
      });
    };
    this.state = {
      seeNotification: this._seeNotification,
      deleteNotification: this._deleteNotification,
      notifications: {
        '1': {
          id: 1,
          text: 'First Notification, Practice',
          seen: false,
        },
        '2': {
          id: 2,
          text: 'Something else',
          seen: false,
        },
        '3': {
          id: 3,
          text: 'Store Provider and Consumer',
          seen: false,
        },
      },
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
