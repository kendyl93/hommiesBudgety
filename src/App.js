import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import { Row, Col } from 'react-bootstrap';

import Home from './Components/Home';
import MyGroups from './Components/MyGroups';
import PageNavigation from './Components/PageNavigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Row className="App">
          <Col sm={4} lg={3}>
            <aside className="left-sidebar">
              <PageNavigation />
            </aside>
          </Col>
          <Col sm={8} lg={9}>
            <main>
              <Route path="/" exact component={Home} />
              <Route path="/my-groups" component={MyGroups} />
            </main>
          </Col>
        </Row>
      </BrowserRouter>
    );
  }
}

export default App;
