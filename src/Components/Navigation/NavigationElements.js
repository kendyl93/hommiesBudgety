import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  Users as GroupsIcon,
  Settings as MyAccountIcon
} from '../icons';

const NavigationElements = () => (
  <ul>
    <li>
      <Link to="/">
        <HomeIcon />
        <span>Home</span>
      </Link>
    </li>
    <li>
      <Link to="/my-groups">
        <GroupsIcon />
        <span>My groups</span>
      </Link>
    </li>
    <li>
      <Link to="/my-account">
        <MyAccountIcon />
        <span>My account</span>
      </Link>
    </li>
  </ul>
);

export default NavigationElements;
