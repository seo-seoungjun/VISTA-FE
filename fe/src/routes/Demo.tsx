import React, { useEffect } from 'react';
import FileUpLoad from '../components/form/file_upload_form/FileUpLoad';
import SideBar from '../components/navbar/SideBar';

import styled from 'styled-components';
import { useAuth } from '../hooks/auth';

const Section = styled.div`
  display: flex;
`;

function Demo() {
  const auth = useAuth();

  useEffect(() => {
    auth();
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
