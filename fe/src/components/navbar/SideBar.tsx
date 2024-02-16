import React, { useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { googleLogout } from '@react-oauth/google';

import styled from 'styled-components';
import { fileId } from '../../atoms/atom';

const DATA_KEY_List = 'data_list';

const Header = styled.header`
  position: fixed;
  width: 16%;
  height: 100vh;
  /* box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25); */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  p,
  a {
    text-align: center;
    color: ${(props) => props.theme.sideBarTextColor};
  }
  background-color: ${(props) => props.theme.sideBarBgColor};
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
    justify-content: center;
    border-radius: 3px;
    gap: 10px;
    padding: 3px 0;
    width: 85%;
  }
`;

const HomeMenu = styled.li<{ $isActive: boolean }>`
  transition: all 1s;
  div {
    background-color: ${(props) =>
      props.$isActive ? props.theme.highLightBgColor : props.theme.bodyColor};
    color: ${(props) =>
      props.$isActive ? props.theme.highLightTextColor : props.theme.textColor};
  }
  transition: all 1s;

  div:hover {
    background-color: ${(props) => props.theme.highLightBgColor};
    color: ${(props) => props.theme.textColor};
  }
  div.on-hover {
    background-color: ${(props) => props.theme.bodyColor};
    color: ${(props) => props.theme.textColor};
  }
`;

const MenuWrapper = styled.div``;

const HomeMenuImg = styled.img``;

const DemoMenu = styled.li<{ $isActive: boolean }>`
  transition: all 1s;
  div {
    background-color: ${(props) =>
      props.$isActive ? props.theme.highLightBgColor : props.theme.bodyColor};
    color: ${(props) => props.theme.textColor};
  }
  transition: all 1s;

  div:hover {
    background-color: ${(props) => props.theme.highLightBgColor};
    color: ${(props) => props.theme.textColor};
  }
  div.on-hover {
    background-color: ${(props) => props.theme.bodyColor};
    color: ${(props) => props.theme.textColor};
  }
`;

const DemoMenuImg = styled.img``;

const DataNav = styled.div``;

const DataRecordList = styled.ul``;

const DataList = styled.li`
  p {
    font-weight: bold;
  }
`;

const Data = styled.li`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const AuthNav = styled.div``;

const AuthNavTitle = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
`;

const AuthList = styled.ul`
  li {
    margin-bottom: 5px;
  }
`;

const SignIn = styled.li``;

const SignOut = styled.li`
  cursor: pointer;
`;

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
  const [dataList, setDataList] = useRecoilState(fileId);

  useEffect(() => {
    if (localStorage.getItem(DATA_KEY_List) !== null) {
      const getDataList: string[] = [
        ...JSON.parse(localStorage.getItem(DATA_KEY_List) || ''),
      ];
      setDataList([...new Set(getDataList)]);
      localStorage.setItem(
        DATA_KEY_List,
        JSON.stringify([...new Set(getDataList)])
      );
    }
  }, []);

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
              <DataList>
                <p>DataList</p>
              </DataList>
              {dataList?.map((fileId) => (
                <Data key={fileId}>
                  <Link
                    to={{
                      pathname: `/analytics/${fileId}`,
                    }}
                  >
                    Data
                  </Link>
                </Data>
              ))}
            </DataRecordList>
          </DataNav>
        </MeueNav>
        <AuthNav>
          <AuthNavTitle>Authentication</AuthNavTitle>
          <AuthList>
            <SignIn>
              <p>
                <Link to={'/login'}>SignIn</Link>
              </p>
            </SignIn>
            <SignOut onClick={() => googleLogout()}>
              <p>SignOut</p>
            </SignOut>
          </AuthList>
        </AuthNav>
      </Header>
    </>
  );
}

export default SideBar;
