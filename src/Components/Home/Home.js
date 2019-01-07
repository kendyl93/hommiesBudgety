import React from 'react';
import logo from '../../logo.svg';

const Home = props => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Home Page</h1>
      <h3>Todo:</h3>
      <p>
        <ul>
          <li>Add sparklines and some temporary data</li>
          <li>Add Avatar component</li>
          <li>Fix nav and add some icons</li>
        </ul>
      </p>
    </header>
  );
};

export default Home;
