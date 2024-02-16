import React from 'react';
import FileUpLoad from '../components/form/file_upload_form/FileUpLoad';
import SideBar from '../components/navbar/SideBar';

import { useAccessTokenVaild } from '../hooks/auth';

function Demo() {
  useAccessTokenVaild();

  return (
    <>
      <SideBar />
      <FileUpLoad />
    </>
  );
}

export default Demo;
