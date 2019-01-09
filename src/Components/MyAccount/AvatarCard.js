import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';

const AvatarCardBox = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: red;
`;
const InlineBox = styled.div`
  display: inline-block;
`;

const AvatarCard = props => {
  const { AvatarUrl, userName } = props;

  return (
    <AvatarCardBox>
      <InlineBox>
        <Avatar src={AvatarUrl} userName={userName} size={8} />
      </InlineBox>
      <InlineBox>
        <h4>{userName}</h4>
      </InlineBox>
    </AvatarCardBox>
  );
};

export default AvatarCard;
