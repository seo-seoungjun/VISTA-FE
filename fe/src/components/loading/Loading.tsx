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

const Spinner = styled.div<{ size: string }>`
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-left-color: #4044ed;
  border-radius: 50%;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  animation: ${spinAnimation} 1.5s linear infinite;
`;

// 로딩 컴포넌트 함수 작성
const Loading = ({ size = '50px' }) => {
  return <Spinner size={size} />;
};

export default Loading;
