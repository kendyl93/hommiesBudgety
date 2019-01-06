import React from 'react';

const PageNavigation = props => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Raporty</a>
        </li>
        <li>
          <a href="/my-groups">Moje Grupy</a>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
