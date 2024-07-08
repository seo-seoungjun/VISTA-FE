import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../hooks/auth';
import SideBarToggleBtn from '../navbar/SideBarToggleBtn';

const ToggleBtnWapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-start;
`;

const ToggleSpanWapper = styled.span`
  position: relative;
  display: none;

  span {
    padding: 5px;
    background-color: #ffffff;
    color: black;
    position: fixed;
    display: none;
  }
  &[data-state='displayed-open'] {
    span {
      display: block;
    }
  }
`;

const ToggleBtn = styled.button`
  cursor: pointer;
`;

const Section = styled.main`
  @media (max-width: 1447px) {
    padding: 50px 130px;
  }
  /* width: 84%; */
  display: flex;
  flex-direction: column;
  padding: 150px 130px;
  text-align: center;
`;

const Title = styled.h1`
  display: block;
  color: ${(props) => props.theme.mainPage.TitleColor};
  font-size: 69px;
  font-weight: bold;
  padding: 24px;
`;

const DiscriptionWrapper = styled.div`
  padding: 40px 32px;
`;

const Discription = styled.p`
  color: ${(props) => props.theme.mainPage.textColor};
  font-size: 23px;
  line-height: 30px;
  strong {
    color: ${(props) => props.theme.mainPage.mostHighlightColor};
    font-weight: 400;
  }
`;

const BtnWrapperGrid = styled.div`
  padding: 30px 0;
`;

const StartBtnWapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  a {
    display: block;
    width: 100px;
    padding: 18px 14px;
    border-radius: 8px;
    span {
      font-weight: 400;
    }
  }
`;

const StartBtnLink = styled.a`
  background-color: ${(props) => props.theme.mainPage.highlightTextColor};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #cccccc;
  }
`;

const GithubBtn = styled.a`
  background-color: ${(props) => props.theme.bodyColor};
  color: ${(props) => props.theme.mainPage.highlightTextColor};
  box-shadow: rgba(255, 255, 255, 0.14) 0px 0px 0px 1px;
  transition: all 0.4s;

  &:hover {
    background-color: #1f1f1f;
  }
`;

function Intro() {
  const auth = useAuth('/demo');

  const onStartBtnClick = () => {
    auth();
  };

  return (
    <>
      <SideBarToggleBtn />
      <Section>
        <Title>
          Automatic Generation of Visualizations and Infographics <br /> with
          LLMs
        </Title>
        <DiscriptionWrapper>
          <Discription>
            <strong>Vista is a visualization generation tool</strong> based on
            large language and image generation models, consisting of data
            summarization, visualization goal derivation, visualization code
            generation, and graphic generation modules. It provides a hybrid
            user interface through natural language and direct manipulation to
            support interactive charts, infographics, and data story generation.
          </Discription>
        </DiscriptionWrapper>
        <BtnWrapperGrid>
          <StartBtnWapper>
            <StartBtnLink onClick={onStartBtnClick}>
              <span>Get Started</span>
            </StartBtnLink>
            <GithubBtn href="https://github.com/LlamaVista/LlamaVista">
              <span>Go Github</span>
            </GithubBtn>
          </StartBtnWapper>
        </BtnWrapperGrid>
      </Section>
    </>
  );
}

export default Intro;
