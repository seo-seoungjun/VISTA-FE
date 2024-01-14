import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

interface ILogin {
  id: string;
  pw: string;
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
    color: ${(props) => props.theme.sideBarTextColor};
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
  color: ${(props) => props.theme.sideBarTextColor};
  border-bottom: 1px solid ${(props) => props.theme.sideBarTextColor};
`;

const LogInButton = styled.button`
  background-color: #4044ed;
  color: ${(props) => props.theme.sideBarTextColor};
  padding: 10px;
  cursor: pointer;
  border: none;
  margin-bottom: 12px;
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
  border: 1px solid ${(props) => props.theme.sideBarTextColor};
  border-radius: 16px;
  color: ${(props) => props.theme.sideBarTextColor};
  &:hover {
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.sideBarTextColor};
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

const handleGoogleLogin = () => {
  // 구글 로그인 로직을 작성하세요.
};

const handleGithubLogin = () => {
  // 깃허브 로그인 로직을 작성하세요.
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: '',
      pw: '',
    },
  });

  const SubmitOnValid = (data: ILogin) => {
    const formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
      console.log(key, value);
    }
  };

  return (
    <Container>
      <Form
        encType="multipart/form-data"
        onSubmit={handleSubmit(SubmitOnValid)}
      >
        <h1>Login</h1>
        <Input {...register('id')} required type="text" placeholder="Id" />
        <Input
          {...register('pw')}
          required
          type="password"
          placeholder="password"
        />
        <LogInButton type="submit">login</LogInButton>
      </Form>
      <SocialLoginBtnWrapper>
        <SocialLoginBtn onClick={handleGoogleLogin}>
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
