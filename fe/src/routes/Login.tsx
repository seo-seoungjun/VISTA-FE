import React, { useEffect } from 'react';
import styled from 'styled-components';
import LoginForm from '../components/form/auth_form/LoginForm';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

const LoginSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  height: 100vh;
`;
const LeftSide = styled.div`
  @media (min-width: 1200px) {
    display: flex;
  }
  width: 40%;
  display: none;
  align-items: center;
`;
const RightSide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;

const RightSideTitleWrapper = styled.div`
  @media (max-width: 1200px) {
    &.mobile {
      display: flex;
    }
  }
  display: none;
  flex-direction: column;
  border-radius: 20px;
  width: 60%;
  padding: 30px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px;
  gap: 20px;
`;

const DiscriptiopWrapper = styled.div`
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px;
  padding: 50px 80px;
  border-radius: 20px;
`;

const Title = styled.h1`
  @media (max-width: 1200px) {
    margin: 0;
  }
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
  @media (max-width: 1200px) {
    padding: 0;
    margin: 0;
    width: 20%;
  }

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
  const auth = useAuth('/demo');

  useEffect(() => {
    auth();
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
          <RightSideTitleWrapper className="mobile">
            <Title>VISTA</Title>
            <Discription>
              VISTA is a convenient command prompt-based tool for data analysis
              receiving JSON and Excel files as inputs and providing users with
              a variety of analysis results.
              <br /> <br />
              This data analysis service operates on a command prompt basis and
              is a tool that provides immediate analysis results when users
              enter various data formats such as JSON and Excel files through
              commands.
            </Discription>
            <MoreBtn>
              <p>
                <Link to={'/'}>Learn More</Link>
              </p>
            </MoreBtn>
          </RightSideTitleWrapper>
          <LoginForm />
        </RightSide>
      </LoginSection>
    </>
  );
}

export default Login;
