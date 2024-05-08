import React from 'react';
import { IAssistantFileComponentProps } from '../../interface/chat/interface.chating';
import styled from 'styled-components';

const Img = styled.img`
  width: 70%;
`;

const AssistantFile = ({ fileId }: IAssistantFileComponentProps) => {
  const DNS = process.env.REACT_APP_DNS;
  const SPRING_PORT = process.env.REACT_APP_PORT;

  return (
    <>
      <br />
      <br />
      <Img src={`${DNS}:${SPRING_PORT}/static/images/${fileId}.png`} alt="" />
    </>
  );
};

export default AssistantFile;
