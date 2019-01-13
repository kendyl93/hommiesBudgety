import React, { Component } from 'react';

import { Row } from 'react-bootstrap';
import NavigationElements from './NavigationElements';
import { Menu as MenuIcon, X as CloseImage } from '../icons';
import { toggleSlide } from './animation';

class PageNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false
    };
  }

  slideNavbar = () => {
    const menuButton = document.getElementById('menuButton');
    const navigationToShow = '.NavigationElements';

    menuButton.addEventListener(
      'click',
      event => {
        toggleSlide(document.querySelector(navigationToShow));
      },
      false
    );
  };

  componentDidMount() {
    this.slideNavbar();
  }

  render() {
    const { isMenuOpen } = this.state;

    const handleMenuButtonClick = () => {
      this.setState({ isMenuOpen: !isMenuOpen });
    };

    return (
      <Row>
        <button id="menuButton" onClick={handleMenuButtonClick}>
          {isMenuOpen ? (
            <CloseImage className="OpenMenu" />
          ) : (
            <MenuIcon className="OpenMenu" />
          )}
        </button>
        <nav className="NavigationElements">
          <NavigationElements />
        </nav>
      </Row>
    );
  }
}

export default PageNavigation;
