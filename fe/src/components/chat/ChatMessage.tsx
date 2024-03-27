import React from 'react';
import styled from 'styled-components';
import { ChatProps } from '../../interface/chat/interface.chating';

// 채팅 UI의 기본 스타일을 정의합니다.
const ChatContainer = styled.div`
  width: 300px;
  background-color: #f4f4f4;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Message = styled.div<{ isUser: boolean }>`
  background-color: ${({ isUser }) => (isUser ? '#e6f7ff' : '#ffffff')};
  color: ${({ isUser }) => (isUser ? '#1890ff' : '#000000')};
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 5px;
  align-self: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
`;

// 대화 UI를 나타내는 Chat 컴포넌트를 정의합니다.

const ChatMessage: React.FC<ChatProps> = ({ messages }) => {
  return (
    <ChatContainer>
      <MessageContainer>
        {messages.map((message, index) => (
          <Message key={index} isUser={message.isUser}>
            {message.data}
          </Message>
        ))}
      </MessageContainer>
    </ChatContainer>
  );
};

export default ChatMessage;
