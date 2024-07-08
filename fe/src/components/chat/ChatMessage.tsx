import React from 'react';
import styled from 'styled-components';
import { ChatProps } from '../../interface/chat/interface.chating';
import Loading from '../loading/Loading';
import UserFile from './UserFile';
import AssistantFile from './AssistantFile';

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

const ChatMessage = ({ data, isStreamingLoading, thread_id }: ChatProps) => {
  채ㅜ;

  return (
    <ChatContainer>
      <MessageContainer>
        {data.map((data, index) => (
          <Message key={index} $role={data.role}>
            {data?.text}
            {data.role === 'user' &&
              data.file_id !== undefined &&
              data.file_id?.length !== 0 && (
                <UserFile
                  key={index}
                  thread_id={thread_id}
                  fileId={data.file_id}
                />
              )}
            {data.role === 'assistant' &&
              data.file_id !== undefined &&
              data.file_id?.length !== 0 &&
              data.file_id.map((fileId) => (
                <AssistantFile key={fileId} fileId={fileId} />
              ))}
          </Message>
        ))}
        {isStreamingLoading && <Loading size="15px" />}
      </MessageContainer>
    </ChatContainer>
  );
};

export default ChatMessage;
