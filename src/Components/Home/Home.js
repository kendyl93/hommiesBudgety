import React from 'react';
import { Sparklines, SparklinesBars, SparklinesLine } from 'react-sparklines';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

const SparkLineBox = styled.div`
  border: solid 1px #61dafb;
  border-radius: 3px;
`;
const HeaderBox = styled.h6`
  padding: 8px 0 0 8px;
`;

const Home = props => {
  return (
    <header className="App-header">
      <Row>
        <Col sm={6}>
          <SparkLineBox>
            <HeaderBox>Overall</HeaderBox>
            <Sparklines
              data={[5, 102, 53, 205, 5, 130, 56, 204, 51, 190, 51, 90]}
            >
              <SparklinesLine color="#61DAFB" />
            </Sparklines>
          </SparkLineBox>
        </Col>
        <Col sm={6}>
          <SparkLineBox>
            <HeaderBox>Outcome</HeaderBox>
            <Sparklines data={[50, 70, 53, 50, 50, 70, 56, 45, 51, 90, 51, 90]}>
              <SparklinesBars
                style={{ stroke: 'white', strokeWidth: '1', fill: '#40c0f5' }}
              />
            </Sparklines>
          </SparkLineBox>
        </Col>
      </Row>
      <h1>Home Page</h1>
      <h3>Todo:</h3>
      <div>
        <ul>
          <li>Fix nav at mobile devices</li>
        </ul>
      </div>
    </header>
  );
};

export default Home;
