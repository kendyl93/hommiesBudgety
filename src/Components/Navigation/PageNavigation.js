import React from 'react';

import AppCard from '../AppCard';
import { Row } from 'react-bootstrap';
import ResponsiveMenu from 'react-responsive-navbar';
import NavigationElements from './NavigationElements';
import { Menu as MenuIcon, X as CloseImage } from '../icons';

import AvatarCard from '../MyAccount/AvatarCard';

const DEFAULT_USER = 'Paweł Stanecki';

const PageNavigation = props => {
  return (
    <Row>
      <AppCard />
      <AvatarCard userName={DEFAULT_USER} />
      <nav>
        <ResponsiveMenu
          menuOpenButton={
            <div>
              {' '}
              <MenuIcon />{' '}
            </div>
          }
          menuCloseButton={
            <div>
              <CloseImage />
            </div>
          }
          changeMenuOn="500px"
          largeMenuClassName="large-menu-classname"
          smallMenuClassName="small-menu-classname"
          menu={<NavigationElements />}
        />
      </nav>
    </Row>
  );
};

export default PageNavigation;
