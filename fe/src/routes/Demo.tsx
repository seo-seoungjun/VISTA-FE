import React, { useEffect } from 'react';
import FileUpLoad from '../components/form/file_upload_form/FileUpLoad';
import SideBar from '../components/navbar/SideBar';
import { useHistory, useLocation } from 'react-router-dom';
import { IDemoLocation } from '../atoms/atom';

function Demo() {
  const { state } = useLocation<IDemoLocation>();
  const history = useHistory();

  useEffect(() => {
    console.log(state);
    if (state == undefined) history.push('/login');
  }, []);

  return (
    <>
      <SideBar />
      <FileUpLoad />
    </>
  );
}

export default Demo;
