import React from 'react';
import { Link } from 'react-router-dom';
import AppCard from './AppCard';
import { Row } from 'react-bootstrap';
import {
  Home as HomeIcon,
  Users as GroupsIcon,
  Settings as MyAccountIcon
} from './icons';

const PageNavigation = props => {
  return (
    <Row>
      <AppCard />
      <nav>
        <ul>
          <li>
            <Link to="/">
              <HomeIcon />
              Home
            </Link>
          </li>
          <li>
            <Link to="/my-groups">
              <GroupsIcon />
              My groups
            </Link>
          </li>
          <li>
            <Link to="/my-account">
              <MyAccountIcon />
              My account
            </Link>
          </li>
        </ul>
      </nav>
    </Row>
  );
};

export default PageNavigation;
