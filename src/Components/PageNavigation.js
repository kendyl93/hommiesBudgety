import React from 'react';
import { Link } from 'react-router-dom';
import AppCard from './AppCard';
import { Row } from 'react-bootstrap';

const PageNavigation = props => {
  return (
    <Row>
      <AppCard />
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
    </Row>
  );
};

export default PageNavigation;
