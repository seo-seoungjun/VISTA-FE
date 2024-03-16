import React, { useEffect } from 'react';
import FileUpLoad from '../components/form/file_upload_form/FileUpLoad';
import SideBar from '../components/navbar/SideBar';

import { useAccessTokenVaild } from '../hooks/auth/auth';
import styled from 'styled-components';
import { TokenKey } from '../atoms/atom';

const Section = styled.div`
  display: flex;
`;

function Demo() {
  const accessToken = localStorage.getItem(TokenKey.accessToken) as string;
  const mutate = useAccessTokenVaild();

  useEffect(() => {
    mutate(accessToken);
  }, []);

  return (
    <>
      <Section>
        <SideBar />
        <FileUpLoad />
      </Section>
    </>
  );
}

export default Demo;
