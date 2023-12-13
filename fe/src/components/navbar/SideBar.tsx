import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import styled from 'styled-components';

const Header = styled.header`
  background-color: ${(props) => props.theme.bgColor};
  width: 30%;
  height: 99.7vh;
  border-radius: 15px;
  border: 1px solid #555151;
  /* box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25); */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  p,
  a {
    text-align: center;
    font-weight: 400;
  }
`;

const LidaIcon = styled.div`
  margin-top: 20px;
`;

const LidaText = styled.p`
  font-weight: bold !important;
  text-transform: uppercase;
`;

const MeueNav = styled.nav``;

const MeueList = styled.ul`
  li {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  li div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    gap: 10px;
    padding: 3px 0;
    width: 75%;
  }
`;

const HomeMenu = styled.li<{ $isActive: boolean }>`
  transition: all 1s;
  div {
    background-color: ${(props) =>
      props.$isActive ? props.theme.highLightColor : props.theme.bgColor};
    color: ${(props) =>
      props.$isActive ? props.theme.highLightTextColor : props.theme.textColor};
  }
  transition: all 1s;

  div:hover {
    background-color: ${(props) => props.theme.highLightColor};
    color: ${(props) => props.theme.highLightTextColor};
  }
  div.on-hover {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
`;

const MenuWrapper = styled.div``;

const HomeMenuImg = styled.img``;

const DemoMenu = styled.li<{ $isActive: boolean }>`
  transition: all 1s;
  div {
    background-color: ${(props) =>
      props.$isActive ? props.theme.highLightColor : props.theme.bgColor};
    color: ${(props) =>
      props.$isActive ? props.theme.highLightTextColor : props.theme.textColor};
  }
  transition: all 1s;

  div:hover {
    background-color: ${(props) => props.theme.highLightColor};
    color: ${(props) => props.theme.highLightTextColor};
  }
  div.on-hover {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
`;

const DemoMenuImg = styled.img``;

const DataNav = styled.div``;

const DataRecordList = styled.ul``;

const CreateNewData = styled.li``;

const Data = styled.li``;

const AuthNav = styled.div``;

const AuthList = styled.ul``;

const SignIn = styled.li``;

const SignUp = styled.li``;

const onMouseHomeOver = (e: React.MouseEvent<HTMLDivElement>) => {
  const target = e.target as HTMLAnchorElement;
  const parentEl = target.parentElement;
  const div = parentEl?.parentElement?.querySelector('#demo');
  div?.classList.add('on-hover');
};

const onMouseHomeLeave = (e: React.MouseEvent<HTMLDivElement>) => {
  const target = e.target as HTMLAnchorElement;
  const parentEl = target.parentElement;
  const div = parentEl?.parentElement?.querySelector('#demo');
  div?.classList.remove('on-hover');
};

const onMouseDemoOver = (e: React.MouseEvent<HTMLDivElement>) => {
  const target = e.target as HTMLAnchorElement;
  const parentEl = target.parentElement;
  const div = parentEl?.parentElement?.querySelector('#home');
  div?.classList.add('on-hover');
};

const onMouseDemoLeave = (e: React.MouseEvent<HTMLDivElement>) => {
  const target = e.target as HTMLAnchorElement;
  const parentEl = target.parentElement;
  const div = parentEl?.parentElement?.querySelector('#home');
  div?.classList.remove('on-hover');
};

function SideBar() {
  const homeMenuMatch = useRouteMatch({ path: '/', exact: true });
  const demoMenuMatch = useRouteMatch({ path: '/demo', exact: true });

  return (
    <>
      <Header>
        <LidaIcon>
          <LidaText>vista</LidaText>
        </LidaIcon>
        <MeueNav>
          <MeueList>
            <HomeMenu $isActive={homeMenuMatch !== null}>
              <MenuWrapper
                id="home"
                onMouseLeave={onMouseHomeLeave}
                onMouseOver={onMouseHomeOver}
              >
                <HomeMenuImg src="http://localhost:3000/Images/home.svg" />
                <Link to={'/'}>Home</Link>
              </MenuWrapper>
            </HomeMenu>
            <DemoMenu $isActive={demoMenuMatch !== null}>
              <MenuWrapper
                id="demo"
                onMouseLeave={onMouseDemoLeave}
                onMouseOver={onMouseDemoOver}
              >
                <DemoMenuImg src="http://localhost:3000/Images/demo.svg" />
                <Link to={'/demo'}>Demo</Link>
              </MenuWrapper>
            </DemoMenu>
          </MeueList>
          <DataNav>
            <DataRecordList>
              <CreateNewData>
                <p>new</p>
              </CreateNewData>
              <Data>
                <p>ect</p>
                <p>ect</p>
                <p>ect</p>
                <p>ect</p>
                <p>ect</p>
                <p>ect</p>
              </Data>
            </DataRecordList>
          </DataNav>
        </MeueNav>
        <AuthNav>
          <p>Authentication</p>
          <AuthList>
            <SignIn>
              <p>SignIn</p>
            </SignIn>
            <SignUp>
              <p>SignUp</p>
            </SignUp>
          </AuthList>
        </AuthNav>
      </Header>
    </>
  );
}

export default SideBar;
