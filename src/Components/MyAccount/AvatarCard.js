import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import { truncate } from '../../String';

const AvatarCardBox = styled.div`
  min-height: auto;
  margin: 16px 8px;
  padding: 8px;
  border-radius: 8px;
  border: solid 1px transparent;
  text-align: left;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: solid 1px #ccc;
    border-radius: 8px;
    cursor: pointer;
  }
`;
const InlineBox = styled.div`
  display: inline-block;
`;

const UserName = styled.p`
  font-size: 12px;
`;

const AvatarCard = props => {
  const { AvatarUrl, userName } = props;

  return (
    <AvatarCardBox>
      <InlineBox>
        <Avatar src={AvatarUrl} userName={userName} size={6} />
      </InlineBox>
      <InlineBox>
        <UserName>{truncate(userName, 20)}</UserName>
      </InlineBox>
    </AvatarCardBox>
  );
};

export default AvatarCard;
