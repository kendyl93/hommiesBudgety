import React from 'react';
import logo from '../logo.svg';

const AppCard = () => {
  return (
    <div className="app-card-wrapper">
      <div className="inline-block app-card-wrapper-img">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="inline-block app-card-wrapper-h1">
        <h1>Hommies</h1>
      </div>
    </div>
  );
};

export default AppCard;
