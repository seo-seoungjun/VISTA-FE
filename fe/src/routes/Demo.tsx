import React, { useEffect } from 'react';
import SideBar from '../components/navbar/SideBar';

import styled from 'styled-components';
import { useAuth } from '../hooks/auth';
import CreateChat from '../components/form/file_upload_form/CreateChat';
import SideBarToggleBtn from '../components/navbar/SideBarToggleBtn';

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
        <CreateChat />
      </Section>
    </>
  );
}

export default Demo;
