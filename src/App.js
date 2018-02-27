import React, { Component } from 'react';
import classes from './App.module.css';
import Menu from './containers/Menu/Menu';

class App extends Component {
  
  importIMG = r =>  {
    let images = {};
    r.keys().forEach((item, index) => { 
      images[item.replace('./', '').slice(0,-4)] = r(item);
    });
    return images;
  };

  importJSON = r =>  {
    let jsons = {};
    r.keys().forEach((item, index) => { 
      jsons[item.replace('./', '').slice(0,3)] = r(item);
    });
    return jsons;
  };

  images = this.importIMG(require.context('./assets/images/', false, /\.(png|jpe?g|svg)$/));
  jsons = this.importJSON(require.context('./assets/json/', false, /\.(json)$/));

  render() {
    return (
      <div className={classes.App}>
        <Menu 
          images={this.images}
          jsons={this.jsons}
        />
      </div>
    );
  }
}

export default App;
