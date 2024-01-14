import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/form/login_form/LoginForm';

const LoginSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  height: 100vh;
`;
const LeftSide = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
`;
const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

const DiscriptiopWrapper = styled.div`
  color: ${(props) => props.theme.sideBarTextColor};
  background-color: rgba(255, 255, 255, 0.02);
  padding: 30px 80px;
  border-radius: 20px;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Discription = styled.p``;

const MoreBtn = styled.button`
  background-color: #4044ed;
  color: ${(props) => props.theme.sideBarTextColor};
  padding: 3px 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-family: 'Apple SD gothic neo';
  font-size: 20px;
  font-weight: 100;
  margin-top: 20px;
`;

function Login() {
  return (
    <>
      <LoginSection>
        <LeftSide>
          <DiscriptiopWrapper>
            <Title>VISTA</Title>
            <Discription>
              VISTA is a convenient command prompt-based tool for data analysis,
              receiving JSON and Excel files as inputs and providing users with
              a variety of analysis results.
              <br /> <br />
              This data analysis service operates on a command prompt basis and
              is a tool that provides immediate analysis results when users
              enter various data formats such as JSON and Excel files through
              commands.
              <br /> <br />
              This service is useful to data scientists and nonprofessionals
              alike as a tool that allows data analytics to be easily performed
              at a command prompt. It is also modularized to facilitate the
              addition of new analytics capabilities and data formats, making it
              highly scalable. Services evolve through continuous updates and
              user feedback, lowering barriers to data analytics to help users
              gain more insight.
            </Discription>
            <MoreBtn>
              <p>Learn More</p>
            </MoreBtn>
          </DiscriptiopWrapper>
        </LeftSide>
        <RightSide>
          <LoginForm />
        </RightSide>
      </LoginSection>
    </>
  );
}

export default Login;
