import React from 'react';
import logo from '../../logo.svg';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import styled from 'styled-components';

const SparkLineBox = styled.div`
  width: 300px;
  height: auto;
  padding-top: 16px;
  margin: 16px;
  border: solid 1px #61dafb;
  border-radius: 3px;
`;

const Home = props => {
  return (
    <header className="App-header">
      <SparkLineBox>
        <Sparklines data={[5, 102, 53, 205, 5, 130, 56, 204, 51, 190, 51, 90]}>
          <SparklinesLine color="#61DAFB" />
        </Sparklines>
      </SparkLineBox>
      <SparkLineBox>
        <Sparklines
          data={[500, 102, 503, 25, 50, 10, 5, 204, 51, 300, 190, 90]}
        >
          <SparklinesLine color="#61DAFB" />
        </Sparklines>
      </SparkLineBox>
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
