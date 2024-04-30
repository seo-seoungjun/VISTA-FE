import React from 'react';
import styled from 'styled-components';
import { ChatProps } from '../../interface/chat/interface.chating';
import Loading from '../loading/Loading';

const ChatContainer = styled.div`
  width: 85%;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Message = styled.div<{ $role: 'user' | 'assistant' }>`
  background-color: ${({ $role }) =>
    $role === 'user' ? '#e6f7ff' : '#f4f4f4'};
  color: ${({ $role }) => ($role === 'user' ? '#000000' : '#000000')};
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 20px;
  align-self: ${({ $role }) => ($role === 'user' ? 'flex-end' : 'flex-start')};
`;

const ChatMessage = ({ data, isStreamingLoading }: ChatProps) => {
  return (
    <ChatContainer>
      <MessageContainer>
        {data[0]?.messages.map((data, index) => (
          <Message key={index} $role={data.role}>
            {/* 파일 아이디가 있다면 파일 컴포넌트 띄우기 */}
            {data.text}
          </Message>
        ))}
        {isStreamingLoading && <Loading size="15px" />}
      </MessageContainer>
    </ChatContainer>
  );
};

export default ChatMessage;
