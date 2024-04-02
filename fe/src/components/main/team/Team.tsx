import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import Introduce from './Introduce';
import { introduce } from '../../../atoms/main/atom.team';

const Section = styled.section`
  padding: 150px 70px;
  min-height: 90vh;
`;

const TeamWrapper = styled.div`
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

const IntroduceTeam = styled.div`
  padding: 60px 20%;
`;

const ContentWrapper = styled.div`
  display: flex;
  color: ${(props) => props.theme.mainPage.textColor};
  justify-content: space-around;
  .content {
    width: 28%;
    height: 330px;
    background-color: #11111b;
    display: flex;
    flex-direction: column;
    box-shadow: ${(props) => props.theme.mainPage.boxShadow};
    border-radius: 20px;
    cursor: grab;
    overflow-y: hidden;
  }
`;

function Team() {
  const teamArr = useRecoilValue(introduce);

  return (
    <Section>
      <TeamWrapper>
        <DiscriptionWrapper>
          <Title>Our Team</Title>
        </DiscriptionWrapper>
        <IntroduceTeam>
          <ContentWrapper>
            {teamArr?.map((item, index) => (
              <Introduce
                key={index}
                name={item.name}
                roll={item.roll}
                say={item.say}
                url={item.url}
              />
            ))}
          </ContentWrapper>
        </IntroduceTeam>
      </TeamWrapper>
    </Section>
  );
}

export default Team;
