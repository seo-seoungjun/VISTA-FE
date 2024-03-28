import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import styled from 'styled-components';

import { userInfo } from '../../atoms/auth/atom.auth';

import { fileId } from '../../atoms/analytics/atom.analytics';
import { useAuth } from '../../hooks/auth';
import { useLogOut } from '../../hooks/useLogOut';

const DATA_KEY_List = 'data_list';

const Header = styled.header`
  position: sticky;
  top: 0;
  flex: 0 0 13%;
  height: 100vh;
  box-shadow: rgba(255, 255, 255, 0.18) 1px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  text-align: center;
  p {
    color: #d6d6d6;
  }
  a,
  span {
    color: ${(props) => props.theme.sideBarTextColor};
    font-weight: 400;
  }
  background-color: ${(props) => props.theme.sideBarBgColor};
`;

const LidaIcon = styled.div`
  flex: 0 0 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LidaText = styled.p`
  color: #ffffff !important;
  font-size: 25px;
  font-weight: bold !important;
  text-transform: uppercase;
`;

const MeueNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 70%;
`;

const MeueList = styled.ul`
  li {
    display: flex;
    justify-content: center;
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
  div a {
    transition: all 0.5s;
    color: ${(props) =>
      props.$isActive
        ? props.theme.highLightTextColor
        : props.theme.sideBarTextColor};
  }

  div:hover a {
    color: ${(props) => props.theme.highLightTextColor};
  }
  div.on-hover a {
    color: ${(props) => props.theme.sideBarTextColor};
  }
`;

const MenuWrapper = styled.div``;

const HomeMenuImg = styled.img``;

const DemoMenu = styled.li<{ $isActive: boolean }>`
  div a {
    transition: all 0.5s;
    color: ${(props) =>
      props.$isActive
        ? props.theme.highLightTextColor
        : props.theme.sideBarTextColor};
  }

  div:hover a {
    color: ${(props) => props.theme.highLightTextColor};
  }
  div.on-hover a {
    color: ${(props) => props.theme.sideBarTextColor};
  }
`;

const DemoMenuImg = styled.img``;

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

const AuthList = styled.ul`
  li {
    margin-bottom: 5px;
  }
  p {
    margin-bottom: 10px;
    font-weight: bold;
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

const DemoLink = styled.a`
  cursor: pointer;
`;

function SideBar() {
  const homeMenuMatch = useRouteMatch({ path: '/', exact: true });
  const demoMenuMatch = useRouteMatch({ path: '/demo', exact: true });
  const [dataList, setDataList] = useRecoilState(fileId);
  const userData = useRecoilValue(userInfo);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (userData != null) {
      setIsLogin(true);
    }
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
  }, [userData]);

  const logOut = useLogOut();

  const clickLogoutBtn = () => {
    logOut();
  };

  const auth = useAuth('/demo');

  const onDemoClick = () => {
    auth();
  };

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
                {/* <HomeMenuImg src="http://localhost:3000/Images/home.svg" /> */}
                <Link to={'/'}>Home</Link>
              </MenuWrapper>
            </HomeMenu>
            <DemoMenu $isActive={demoMenuMatch !== null}>
              <MenuWrapper
                id="demo"
                onMouseLeave={onMouseDemoLeave}
                onMouseOver={onMouseDemoOver}
              >
                {/* <DemoMenuImg src="http://localhost:3000/Images/demo.svg" /> */}
                <DemoLink onClick={onDemoClick}>Demo</DemoLink>
              </MenuWrapper>
            </DemoMenu>
          </MeueList>
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
          <AuthList>
            <p>Authentication</p>
            {isLogin ? (
              <SignOut onClick={clickLogoutBtn}>
                <span>SignOut</span>
              </SignOut>
            ) : (
              <SignIn>
                <Link to={'/login'}>SignIn</Link>
              </SignIn>
            )}
          </AuthList>
        </MeueNav>
      </Header>
    </>
  );
}

export default SideBar;
