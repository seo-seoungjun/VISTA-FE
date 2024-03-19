import React, { useEffect } from 'react';
import styled from 'styled-components';
import LoginForm from '../components/form/auth_form/LoginForm';
import { Link } from 'react-router-dom';
import { useAccessTokenVaild } from '../hooks/auth/auth';
import { TokenKey } from '../atoms/atom';

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
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px;
  padding: 50px 80px;
  border-radius: 20px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.mainPage.mostHighlightColor};
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Discription = styled.p`
  color: ${(props) => props.theme.mainPage.textColor};
  font-size: 18px;
`;

const MoreBtn = styled.button`
  background-color: #4044ed;
  color: ${(props) => props.theme.mainPage.mostHighlightColor};
  padding: 3px 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-family: 'Apple SD gothic neo';
  font-size: 16px;
  font-weight: 100;
  margin-top: 20px;
`;

function Login() {
  const accessToken = localStorage.getItem(TokenKey.accessToken) as string;
  const mutate = useAccessTokenVaild('/demo');

  useEffect(() => {
    mutate(accessToken);
  }, []);
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
              <p>
                <Link to={'/'}>Learn More</Link>
              </p>
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
