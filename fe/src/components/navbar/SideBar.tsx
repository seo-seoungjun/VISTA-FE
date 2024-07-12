import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import styled from 'styled-components';

import { userInfo } from '../../atoms/auth/atom.auth';

import { fileId } from '../../atoms/analytics/atom.analytics';
import { useAuth } from '../../hooks/auth';
import { useLogOut } from '../../hooks/useLogOut';
import { useHighLight } from '../../hooks/useHighLight';
import { darkTheme } from '../../styles/theme';
import { chatList } from '../../atoms/chat/atom.chat';
import { useMutation } from 'react-query';
import { getChatList } from '../../APIs/chat/api.chat';

const Header = styled.header`
  box-shadow: rgba(255, 255, 255, 0.18) 1px 0px 0px 0px;
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

const HeaderContent = styled.div`
  @media (max-width: 730px) {
    transition: width 2s;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100vw !important;
  }
  background-color: ${(props) => props.theme.sideBarBgColor};
  position: sticky;
  top: 0;
  transition: width 1s;
  width: 180px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ToggleBtnWapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ToggleSpanWapper = styled.span`
  position: relative;

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

const HomeMenu = styled.li`
  div a {
    transition: color 0.5s;
  }
`;

const MenuWrapper = styled.div``;

const HomeMenuImg = styled.img``;

const DemoMenu = styled.li`
  div a {
    transition: color 0.5s;
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
  a {
    transition: color 0.5s;
  }
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

const SignIn = styled.li`
  a {
    transition: color 0.5s;
  }
  a:hover {
    color: ${(props) => props.theme.highLightTextColor};
  }
`;

const SignOut = styled.li`
  a,
  span {
    transition: color 0.5s;
  }
  a,
  span:hover {
    color: ${(props) => props.theme.highLightTextColor};
    cursor: pointer;
  }
`;

const DemoLink = styled(Link)`
  cursor: pointer;
`;

function SideBar() {
  const sideBarPopUpRef = useRef<HTMLSpanElement | null>(null);
  const sideBarRef = useRef<HTMLDivElement | null>(null);

  const [chatListData, setChatListData] = useRecoilState(chatList);

  const userData = useRecoilValue(userInfo);
  const [isLogin, setIsLogin] = useState(false);
  const [isComponentDidMount, setIsComponentDidMount] = useState(false);

  const { mutate: getChatMutate, data } = useMutation(getChatList, {
    onError: (e) => {
      // console.log(e);
    },
    onSuccess: (chatList) => {
      setChatListData(chatList);
      setIsComponentDidMount(true);
    },
  });

  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const element = e.target as HTMLSpanElement;
      element.dataset.state = 'displayed-open';
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const element = e.target as HTMLSpanElement;
      element.dataset.state = 'close';
    };

    const toggleBtnClick = (e: MouseEvent) => {
      const element = sideBarRef?.current as HTMLDivElement;
      element.style.visibility = 'hidden';
      element.style.width = '0';
      const btn = document.querySelector('.toggleBtn') as HTMLSpanElement;
      btn.style.display = 'block';
    };

    const mql = window.matchMedia('(max-width: 1160px)');

    sideBarPopUpRef?.current?.addEventListener('mouseenter', (e) =>
      handleMouseEnter(e)
    );
    sideBarPopUpRef?.current?.addEventListener('mouseleave', (e) =>
      handleMouseLeave(e)
    );
    sideBarPopUpRef?.current?.addEventListener('click', (e) =>
      toggleBtnClick(e)
    );

    if (mql.matches) {
      const btn = sideBarPopUpRef?.current as HTMLSpanElement;
      btn?.click();
    } else {
      const btn = document.querySelector('.toggleBtn') as HTMLSpanElement;
      btn?.click();
    }

    mql.addListener((e) => {
      if (e.matches) {
        const btn = sideBarPopUpRef?.current as HTMLSpanElement;
        btn?.click();
      } else {
        const btn = document.querySelector('.toggleBtn') as HTMLSpanElement;
        btn?.click();
      }
    });

    return () => {
      sideBarPopUpRef?.current?.removeEventListener('mouseenter', (e) =>
        handleMouseEnter(e)
      );
      sideBarPopUpRef?.current?.removeEventListener('mouseleave', (e) =>
        handleMouseLeave(e)
      );
      sideBarPopUpRef?.current?.removeEventListener('click', (e) =>
        toggleBtnClick(e)
      );
    };
  }, []);

  useEffect(() => {
    if (userData != null) {
      setIsLogin(true);
    }
    // if (localStorage.getItem(DATA_KEY_List) !== null) {
    //   const getDataList: string[] = [
    //     ...JSON.parse(localStorage.getItem(DATA_KEY_List) || ''),
    //   ];
    //   setDataList([...new Set(getDataList)]);
    //   localStorage.setItem(
    //     DATA_KEY_List,
    //     JSON.stringify([...new Set(getDataList)])
    //   );
    // }
  }, [userData]);

  useEffect(() => {
    if (isLogin) {
      getChatMutate();
    }
  }, [isLogin]);

  const logOut = useLogOut();

  const clickLogoutBtn = () => {
    logOut();
  };

  const auth = useAuth('/demo');

  const onDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    auth();
  };

  const linkRef = useHighLight(
    darkTheme.highLightTextColor,
    darkTheme.sideBarTextColor,
    isComponentDidMount
  );

  return (
    <>
      <Header>
        <HeaderContent className="header" ref={sideBarRef}>
          <ToggleBtnWapper>
            <ToggleSpanWapper data-state="closed" ref={sideBarPopUpRef}>
              <ToggleBtn>X</ToggleBtn>
              <span>사이드바 닫기</span>
            </ToggleSpanWapper>
          </ToggleBtnWapper>
          <LidaIcon>
            <LidaText>vista</LidaText>
          </LidaIcon>
          <MeueNav>
            <MeueList>
              <HomeMenu>
                <MenuWrapper id="home">
                  {/* <HomeMenuImg src="http://localhost:3000/Images/home.svg" /> */}
                  <Link
                    ref={(element) => (linkRef.current[0] = element)}
                    to={'/'}
                  >
                    Home
                  </Link>
                </MenuWrapper>
              </HomeMenu>
              <DemoMenu>
                <MenuWrapper id="demo">
                  {/* <DemoMenuImg src="http://localhost:3000/Images/demo.svg" /> */}
                  <DemoLink
                    ref={(element) => (linkRef.current[1] = element)}
                    onClick={(e) => onDemoClick(e)}
                    to={'/demo'}
                  >
                    Demo
                  </DemoLink>
                </MenuWrapper>
              </DemoMenu>
            </MeueList>
            <DataRecordList>
              <DataList>
                <p>DataList</p>
              </DataList>
              {isLogin &&
                chatListData?.map((chatList, index) => (
                  <Data key={chatList.thread_id}>
                    <Link
                      ref={(element) => (linkRef.current[index + 2] = element)}
                      to={`/chat/${chatList.thread_id}`}
                    >
                      {chatList.name}
                    </Link>
                  </Data>
                ))}
              {/* {dataList?.map((fileId, index) => (
                <Data key={fileId}>
                  <Link
                    ref={(element) => (linkRef.current[index + 2] = element)}
                    to={`/analytics/${fileId}`}
                  >
                    Data
                  </Link>
                </Data>
              ))} */}
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
        </HeaderContent>
      </Header>
    </>
  );
}

export default React.memo(SideBar);
