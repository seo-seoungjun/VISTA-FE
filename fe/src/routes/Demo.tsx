import React from 'react';
import FileUpLoad from '../components/FileUpLoad';
import PromptTemplete from '../components/PromptTemplete';
import SideBar from '../components/SideBar';
import styled from 'styled-components';

const Section = styled.section`
  width: 70%;
  text-align: center;
`;

function Demo() {
  return (
    <>
      <SideBar />
      <Section>
        <FileUpLoad />
        <PromptTemplete />
      </Section>
    </>
  );
}

export default Demo;
