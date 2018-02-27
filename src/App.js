import React, { Component } from 'react';
import classes from './App.module.css';
import Menu from './containers/Menu/Menu';

class App extends Component {
  
  importAll = r =>  {
    let images = {};
    r.keys().forEach((item, index) => { 
      images[item.replace('./', '').slice(0,-4)] = r(item);
    });
    return images;
  };

  images = this.importAll(require.context('./assets/images/', false, /\.(png|jpe?g|svg)$/));

  render() {
    return (
      <div className={classes.App}>
        <Menu images={this.images}/>
      </div>
    );
  }
}

export default App;
