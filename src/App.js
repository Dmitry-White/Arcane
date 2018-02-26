import React, { Component } from 'react';
import classes from './App.module.css';
import Menu from './containers/Menu/Menu';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Menu />
      </div>
    );
  }
}

export default App;
