import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { SignUp } from '../../../APIs/auth/auth.email';

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

const SignUpBtn = styled.button`
  background-color: #4044ed;
  color: ${(props) => props.theme.mainPage.mostHighlightColor};
  padding: 10px;
  cursor: pointer;
  border: none;
  margin-bottom: 12px;
`;

function SignUpForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  });

  const SubmitOnValid = (data: {
    email: string;
    name: string;
    password: string;
  }) => {
    mutate(data);
  };

  const history = useHistory();

  const { mutate } = useMutation(SignUp, {
    onSuccess: (data) => {
      alert('회원가입 완료');
      history.push('/login');
    },
    onError: (err) => {
      // console.log(err);
    },
  });

  return (
    <Form encType="multipart/form-data" onSubmit={handleSubmit(SubmitOnValid)}>
      <h1>Sign Up</h1>
      <Input {...register('email')} required type="email" placeholder="email" />
      <Input {...register('name')} required type="text" placeholder="name" />
      <Input
        {...register('password')}
        required
        type="password"
        placeholder="password"
      />
      <SignUpBtn type="submit">sign up</SignUpBtn>
    </Form>
  );
}

export default SignUpForm;
