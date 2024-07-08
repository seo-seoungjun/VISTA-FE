import React from 'react';
import styled from 'styled-components';
import AssistantFile from './AssistantFile';
import { IMessageProps } from '../../interface/chat/interface.chating';

const Messages = styled.div<{ $role: 'user' | 'assistant' }>`
  background-color: ${({ $role }) =>
    $role === 'user' ? '#e6f7ff' : '#f4f4f4'};
  color: ${({ $role }) => ($role === 'user' ? '#000000' : '#000000')};
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 20px;
  align-self: ${({ $role }) => ($role === 'user' ? 'flex-end' : 'flex-start')};
`;

function StrimingMessage({ data, isStreamingDone }: IMessageProps) {
  return (
    <>
      {data && !isStreamingDone ? (
        <>
          {data.map((data, index) => (
            <Messages key={index} $role={data.role}>
              {data?.text}
            </Messages>
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default StrimingMessage;
