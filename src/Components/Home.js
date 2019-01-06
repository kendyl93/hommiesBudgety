import React from 'react';
import logo from '../logo.svg';

const Home = props => {
  return (
    <header className="App-header">
      <nav>
        <ul>
          <li>
            <a href="/">Raporty</a>
          </li>
          <li>
            <a href="/my-goups">Moje Grupy</a>
          </li>
        </ul>
      </nav>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Home Page</h1>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

export default Home;
