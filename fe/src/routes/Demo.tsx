import React from 'react';
import FileUpLoad from '../components/form/file_upload_form/FileUpLoad';
import SideBar from '../components/navbar/SideBar';

import { useAccessTokenVaild } from '../hooks/auth/auth';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
`;

function Demo() {
  useAccessTokenVaild();

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
