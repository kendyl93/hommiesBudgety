import React from 'react';
import { Link } from 'react-router-dom';

const PageNavigation = props => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Raports</Link>
        </li>
        <li>
          <Link to="/my-groups">My groups</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
