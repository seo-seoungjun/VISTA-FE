import React from 'react';
import SideBar from '../components/navbar/SideBar';
import styled from 'styled-components';
import Intro from '../components/main/Intro';
import Features from '../components/main/Features';
import Team from '../components/main/Team';

const Section = styled.main`
  display: flex;
`;

const Home = styled.div``;

function Main() {
  return (
    <>
      <Section>
        <SideBar />
        <Home>
          <Intro />
          <Features />
          <Team />
        </Home>
      </Section>
    </>
  );
}

export default Main;
