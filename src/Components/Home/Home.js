import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import styled from 'styled-components';

const SparkLineBox = styled.div`
  padding-top: 16px;
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
