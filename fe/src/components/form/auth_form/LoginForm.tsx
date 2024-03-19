import { useGoogleLogin } from '@react-oauth/google';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Link,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import styled from 'styled-components';
import { TokenKey, tokenInfo, userInfo } from '../../../atoms/atom';
import { useSetRecoilState } from 'recoil';
import { useMutation, useQuery } from 'react-query';
import { getToken, EmailLogIn, getEmailLoginUserInfo } from '../../../APIs/api';
import SignUpForm from './SignUpForm';
require('dotenv').config();

interface ILogin {
  email: string;
  password: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.textColor};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;

  h1 {
    color: ${(props) => props.theme.mainPage.mostHighlightColor};
    font-size: 50px;
    margin-bottom: 60px;
  }
`;

const Input = styled.input`
  margin-bottom: 35px;
  padding: 8px;
  background-color: inherit;
  border: none;
  outline: none;
  color: ${(props) => props.theme.mainPage.mostHighlightColor};
  border-bottom: 1px solid ${(props) => props.theme.mainPage.mostHighlightColor};
`;

const LogInButton = styled.button`
  background-color: #4044ed;
  color: ${(props) => props.theme.mainPage.mostHighlightColor};
  padding: 10px;
  cursor: pointer;
  border: none;
  margin-bottom: 12px;
`;

const SignUpToggleLink = styled(Link)`
  transition: 0.5s all;
  margin-top: 10px;
  display: flex;
  align-items: center;
  background-color: inherit;
  padding: 7px 14px;
  border: 1px solid ${(props) => props.theme.mainPage.mostHighlightColor};
  border-radius: 16px;
  color: ${(props) => props.theme.mainPage.mostHighlightColor};
  &:hover {
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.mainPage.mostHighlightColor};
  }
`;

const SocialLoginBtnWrapper = styled.div``;

const SocialLoginBtn = styled.div`
  transition: 0.5s all;
  margin-top: 10px;
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
  background-color: inherit;
  cursor: pointer;
  padding: 7px;
  border: 1px solid ${(props) => props.theme.mainPage.mostHighlightColor};
  border-radius: 16px;
  color: ${(props) => props.theme.mainPage.mostHighlightColor};
  &:hover {
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.mainPage.mostHighlightColor};
  }
`;

const GoogleIcon = styled.img``;
const GithubIcon = styled.img``;

const onGithubIconEnter = () => {
  const icon = document.querySelector<HTMLImageElement>('#githubIcon');
  icon!.src = 'http://localhost:3000/Images/githubBlack.svg';
};

const onGithubIconLeave = () => {
  const icon = document.querySelector<HTMLImageElement>('#githubIcon');
  icon!.src = 'http://localhost:3000/Images/github.svg';
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const setUserInfo = useSetRecoilState(userInfo);

  const { mutate: getEmailUserInfo } = useMutation(getEmailLoginUserInfo, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const { mutate } = useMutation(EmailLogIn, {
    onSuccess: (data) => {
      console.log(data);
      // getEmailUserInfo();
      history.push('/demo');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const SubmitOnValid = (data: ILogin) => {
    mutate(data);
  };

  const loginMatch = useRouteMatch('/login');
  const signMatuch = useRouteMatch('/login/signup');

  const history = useHistory();
  const setTokenData = useSetRecoilState(tokenInfo);

  const { mutate: tokenMutate } = useMutation(getToken, {
    onSuccess: (tokenData) => {
      localStorage.setItem(TokenKey.accessToken, tokenData?.access_token);
      localStorage.setItem(TokenKey.refreshToken, tokenData?.refresh_token);
      setTokenData(tokenData);

      console.log(tokenData);

      history.push('/demo');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      // await axios
      //   .get('http://techvista24.com:8000/callback', { params: { code } })
      //   .then(({ data }) => {
      //     console.log(data);
      //   });
      tokenMutate(code);
    },

    onError: (res) => console.log(res),
    flow: 'auth-code',
  });

  const handleGithubLogin = () => {
    // 깃허브 로그인 로직을 작성하세요.
  };

  return (
    <Container>
      <Switch>
        <Route exact path={'/login/signup'}>
          <SignUpForm />
        </Route>
      </Switch>
      <Switch>
        <Route exact path={'/login'}>
          <Form
            encType="multipart/form-data"
            onSubmit={handleSubmit(SubmitOnValid)}
          >
            <h1>Login</h1>
            <Input
              {...register('email')}
              required
              type="email"
              placeholder="Id"
            />
            <Input
              {...register('password')}
              required
              type="password"
              placeholder="password"
            />
            <LogInButton type="submit">login</LogInButton>
          </Form>
        </Route>
      </Switch>
      {loginMatch?.isExact && (
        <SignUpToggleLink to={'/login/signup'}>
          Sign Up With Email
        </SignUpToggleLink>
      )}
      {signMatuch?.isExact && (
        <SignUpToggleLink to={'/login'}>Log in</SignUpToggleLink>
      )}
      <SocialLoginBtnWrapper>
        <SocialLoginBtn onClick={() => handleGoogleLogin()}>
          <GoogleIcon src="http://localhost:3000/Images/google.svg" />
          <p>sign in with google</p>
        </SocialLoginBtn>
        <SocialLoginBtn
          onMouseEnter={onGithubIconEnter}
          onMouseLeave={onGithubIconLeave}
          onClick={handleGithubLogin}
        >
          <GithubIcon
            id="githubIcon"
            src="http://localhost:3000/Images/github.svg"
          />
          <p>sign in with github</p>
        </SocialLoginBtn>
      </SocialLoginBtnWrapper>
    </Container>
  );
}

export default LoginForm;
