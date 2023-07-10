import React from 'react';
import styled from 'styled-components';

import { Person } from '^/types';
import Skeleton from '^/components/atoms/Skeleton';

const Root = styled.div`
  width: 30rem;
  height: 3.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  column-gap: 0.5rem;
`;

const ProfileImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
`;

const NameAndEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.2rem;
`;

const Name = styled.span`
  width: 15rem;
  font-size: 1rem;
  font-weight: 700;
`;

const Email = styled.span`
  width: 15rem;
  font-size: 0.9rem;
  font-weight: 300;
`;

interface Props {
  person?: Person;
}

function NameTag({ person }: Props) {
  const renderProfileImg = person?.avatar ? (
    <ProfileImg src={person.avatar} />
  ) : (
    <Skeleton width="3rem" height="3rem" borderRadius="1.5rem" />
  );

  const renderName =
    person?.first_name && person?.last_name ? (
      <Name>
        {person.first_name} {person.last_name}
      </Name>
    ) : (
      <Skeleton width="10rem" height="1.5rem" borderRadius="1.5rem" />
    );

  const renderEmail = person?.email ? (
    <Email>{person.email}</Email>
  ) : (
    <Skeleton width="10rem" height="1.5rem" borderRadius="1.5rem" />
  );

  return (
    <Root>
      {renderProfileImg}
      <NameAndEmailContainer>
        {renderName}
        {renderEmail}
      </NameAndEmailContainer>
    </Root>
  );
}

export default NameTag;
