import React from 'react';
import styled from 'styled-components';

const calculatedBoxSize = ({ size }) => `${size * 8}px`;

const calculatedFontSize = ({ size }) => `${12 * ((size * 8) / 32)}px`;

const AvatarImgBox = styled.img`
  width: ${calculatedBoxSize};
  min-width: ${calculatedBoxSize};
  height: ${calculatedBoxSize};
  border-radius: 50%;
  margin-right: 8px;
`;

const AvatarBox = styled.div`
  width: ${calculatedBoxSize};
  min-width: ${calculatedBoxSize};
  height: ${calculatedBoxSize};
  font-size: ${calculatedFontSize};
  background-color: white;
  border-radius: 50%;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
`;

const Avatar = ({ source, userName, size = 4 }) => {
  return source ? (
    <AvatarImgBox src={source} alt={userName} size={size} />
  ) : (
    <AvatarBox size={size}>{userName && userName[0].toUpperCase()}</AvatarBox>
  );
};

export default Avatar;
