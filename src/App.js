import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Home from './Components/Home';
import MyGroups from './Components/MyGroups';
import PageNavigation from './Components/PageNavigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <PageNavigation />
          <Home />
          <MyGroups />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
