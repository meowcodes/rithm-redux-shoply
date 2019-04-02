import React, { Component } from 'react';
import ItemList from './ItemList';
import { items } from './items.json';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemList items={ items } />
      </div>
    );
  }
}

export default App;
