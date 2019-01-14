import React from 'react';
import styled from 'styled-components';

const BackdropBox = styled.div`
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 10;
`;

const Backdrop = props => <BackdropBox />;

export default Backdrop;
