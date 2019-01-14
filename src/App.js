import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';
import { Row, Col } from 'react-bootstrap';
import { Home, MyAccount, MyGroups } from './Components';
import PageNavigation from './Components/Navigation/PageNavigation';
import SlideNavigation from './Components/Navigation/SlideNavigation';
import Backdrop from './Components/Navigation/Backdrop';

class App extends Component {
  state = { isSlideNavigationOpen: false };

  slideNavigationHandler = () => {
    this.setState(prevState => ({
      isSlideNavigationOpen: !prevState.isSlideNavigationOpen
    }));
  };

  backdropClickHandler = () => {
    this.setState({ isSlideNavigationOpen: false });
  };

  render() {
    const { isSlideNavigationOpen } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          {}
          {isSlideNavigationOpen && (
            <Backdrop backdropToggle={this.backdropClickHandler} />
          )}
          <Row>
            <Col
              sm={4}
              lg={3}
              className="no-padding-right left-navbar-aside-wrapper"
            >
              <aside className="left-sidebar">
                {isSlideNavigationOpen && <SlideNavigation />}
                <PageNavigation
                  slideNavigationHandler={this.slideNavigationHandler}
                />
              </aside>
            </Col>
            <Col sm={8} lg={9} className="no-padding-left">
              <main>
                <Route path="/" exact component={Home} />
                <Route path="/my-groups" component={MyGroups} />
                <Route path="/my-account" component={MyAccount} />
              </main>
            </Col>
          </Row>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
