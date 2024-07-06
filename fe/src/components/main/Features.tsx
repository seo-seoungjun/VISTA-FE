import React from 'react';
import styled from 'styled-components';
import FeatureGrid from './FeatureGrid';

const Section = styled.section`
  padding: 0 70px;
  min-height: 85vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DiscriptionWrapper = styled.div`
  @media (max-width: 1080px) {
    flex-direction: column;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  display: block;
  color: ${(props) => props.theme.mainPage.TitleColor};
  font-size: 32px;
  font-weight: bold;
  padding: 24px;
`;

const Discription = styled.p`
  color: ${(props) => props.theme.mainPage.textColor};
  font-size: 20px;
`;

function Features() {
  return (
    <Section>
      <ContentWrapper>
        <DiscriptionWrapper>
          <Title>What's in VISTA?</Title>
          <Discription>
            Everything you need to build great project based in data analytic
          </Discription>
        </DiscriptionWrapper>
        <FeatureGrid />
      </ContentWrapper>
    </Section>
  );
}

export default Features;
