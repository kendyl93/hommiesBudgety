import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  Users as GroupsIcon,
  Settings as MyAccountIcon
} from '../icons';
import AppCard from '../AppCard';

import AvatarCard from '../MyAccount/AvatarCard';

const DEFAULT_USER = 'Paweł Stanecki';

const NavigationElements = () => (
  <div>
    <AppCard />
    <AvatarCard userName={DEFAULT_USER} />
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
  </div>
);

export default NavigationElements;
