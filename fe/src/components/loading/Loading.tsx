import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-left-color: #4044ed;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spinAnimation} 1.5s linear infinite;
`;

// 로딩 컴포넌트 함수 작성
const Loading = () => {
  return <Spinner />;
};

export default Loading;
