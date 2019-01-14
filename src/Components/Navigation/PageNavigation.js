import React, { Component } from 'react';

import { Row } from 'react-bootstrap';
import NavigationElements from './NavigationElements';
import { Menu as MenuIcon, X as CloseImage } from '../icons';
import AppCard from '../AppCard';

class PageNavigation extends Component {
  render() {
    const { slideNavigationHandler } = this.props;
    return (
      <Row>
        <AppCard />
        <button onClick={slideNavigationHandler}>
          <MenuIcon />
        </button>
        <nav className="NavigationElements">
          <NavigationElements />
        </nav>
      </Row>
    );
  }
}

export default PageNavigation;
