import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ApiGetPersonResponse, Person } from '^/types';
import NameTag from '^/components/atoms/NameTag';

const Root = styled.div``;

function Main() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [contents, setContents] = useState<Person | undefined>();

  useEffect(() => {
    fetch('https://reqres.in/api/users/2')
      .then((response) => {
        if (!response.ok) {
          setIsLoading(false);
          setContents(undefined);
          throw new Error(`Response error: ${response.status}`);
        }

        return response.json();
      })
      .then((responseJson: ApiGetPersonResponse) => {
        setIsLoading(false);
        setContents(responseJson.data);
      });
  }, []);

  const renderContent = isLoading ? <NameTag /> : <NameTag person={contents} />;

  return <Root>{renderContent}</Root>;
}

export default Main;
