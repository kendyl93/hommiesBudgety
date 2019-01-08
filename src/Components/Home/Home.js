import React from 'react';
import logo from '../../logo.svg';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Home = props => {
  return (
    <header className="App-header">
      <Sparklines data={[5, 10, 5, 20]}>
        <SparklinesLine color="blue" />
      </Sparklines>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Home Page</h1>
      <h3>Todo:</h3>
      <div>
        <ul>
          <li>Add sparklines and some temporary data</li>
          <li>Add Avatar component</li>
          <li>Fix nav at mobile devices</li>
        </ul>
      </div>
    </header>
  );
};

export default Home;
