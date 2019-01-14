import React from 'react';
import NavigationElements from './NavigationElements';

import styled from 'styled-components';

const SlideNavigationWrapper = styled.div`
  height: 100%;
  width: 280px;
  background-color: white;
  position: fixed;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.3);
  z-index: 100;
  left: 0;
  top: 0;
`;

const SlideNavigation = props => {
  return (
    <SlideNavigationWrapper>
      <NavigationElements />
    </SlideNavigationWrapper>
  );
};

export default SlideNavigation;
