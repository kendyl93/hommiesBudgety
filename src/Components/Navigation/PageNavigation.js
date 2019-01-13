import React, { Component } from 'react';

import { Row } from 'react-bootstrap';
import NavigationElements from './NavigationElements';
import { Menu as MenuIcon, X as CloseImage } from '../icons';
import { toggleSlide } from './animation';
import AppCard from '../AppCard';
import styled from 'styled-components';

const NavWrapper = styled.div`
  display: ${props => (props.hideNav ? 'none' : 'block')};
  overflow-y: ${props => (props.hideNav ? 'hidden' : 'visible !important')};
`;

const AppCardAndButgerBtnWrapper = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 425px) {
    padding: 0 16px;
  }
`;

class PageNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleMenu: false,
      hideNav: undefined
    };
  }

  slideNavbar = () => {
    const menuButton = document.getElementById('menuButton');
    const navigationToShow = '.NavWrapper';
    menuButton.addEventListener(
      'click',
      event => {
        toggleSlide(document.querySelector(navigationToShow));
      },
      false
    );
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
    this.slideNavbar();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this));
    document.getElementById('menuButton').addEventListener(
      'click',
      event => {
        toggleSlide(document.querySelector('.NavWrapper'));
      },
      false
    );
  }

  resize() {
    this.setState({ hideNav: window.innerWidth <= 525 ? true : false });
  }

  render() {
    const { toggleMenu, hideNav } = this.state;

    const handleMenuButtonClick = () => {
      this.setState({ toggleMenu: !toggleMenu });
    };

    return (
      <Row>
        {toggleMenu ? (
          <AppCardAndButgerBtnWrapper>
            <AppCard />
            <button id="menuButton" onClick={handleMenuButtonClick}>
              <CloseImage className="toggleNavbar" />
            </button>
          </AppCardAndButgerBtnWrapper>
        ) : (
          <AppCardAndButgerBtnWrapper>
            <AppCard />
            <button id="menuButton" onClick={handleMenuButtonClick}>
              <MenuIcon className="toggleNavbar" />
            </button>
          </AppCardAndButgerBtnWrapper>
        )}
        <nav className="NavigationElements">
          <NavWrapper className="NavWrapper" hideNav={hideNav}>
            <NavigationElements />
          </NavWrapper>
        </nav>
      </Row>
    );
  }
}

export default PageNavigation;
