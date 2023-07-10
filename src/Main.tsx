import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios, { isAxiosError } from 'axios';

import { ApiGetPeopleResponse, Person } from '^/types';
import NameTag from '^/components/atoms/NameTag';

const Root = styled.div``;

function Main() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [contents, setContents] = useState<Person[] | undefined>();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get<ApiGetPeopleResponse>(
          'https://reqres.in/api/users?page=2'
        );
        setContents(response.data.data);
      } catch (error) {
        if (isAxiosError(error)) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      }
      setIsLoading(false);
    })();
  }, []);

  const renderContent = isLoading ? (
    <>
      <NameTag />
      <NameTag />
      <NameTag />
    </>
  ) : (
    contents?.map((content) => (
      <NameTag key={`person-${content.id}`} person={content} />
    ))
  );

  return <Root>{renderContent}</Root>;
}

export default Main;
