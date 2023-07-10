import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios, { isAxiosError } from 'axios';

import { ApiGetPersonResponse, Person } from '^/types';
import NameTag from '^/components/atoms/NameTag';

const Root = styled.div``;

function Main() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [contents, setContents] = useState<Person | undefined>();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get<ApiGetPersonResponse>(
          'https://reqres.in/api/users/2'
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

  const renderContent = isLoading ? <NameTag /> : <NameTag person={contents} />;

  return <Root>{renderContent}</Root>;
}

export default Main;
