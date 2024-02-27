import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 0 70px;
  min-height: 90vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const DiscriptionWrapper = styled.div`
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

function Team() {
  return (
    <Section>
      <ContentWrapper>
        <DiscriptionWrapper>
          <Title>Our Team</Title>
        </DiscriptionWrapper>
      </ContentWrapper>
    </Section>
  );
}

export default Team;
