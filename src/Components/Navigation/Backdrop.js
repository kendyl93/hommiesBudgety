import React, { Component } from 'react';
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

class Backdrop extends Component {
  render() {
    const { backdropToggle } = this.props;
    return (
      <div onClick={backdropToggle}>
        <BackdropBox />
      </div>
    );
  }
}

export default Backdrop;
