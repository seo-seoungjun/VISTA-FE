import React from 'react';
import styled from 'styled-components';
import { ChatProps } from '../../interface/chat/interface.chating';
import Loading from '../loading/Loading';
import Message from './Message';

const ChatContainer = styled.div`
  width: 85%;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatMessage = ({ data, isStreamingLoading, thread_id }: ChatProps) => {
  return (
    <ChatContainer>
      <MessageContainer>
        <Message data={data} thread_id={thread_id}></Message>
        {isStreamingLoading && <Loading size="15px" />}
      </MessageContainer>
    </ChatContainer>
  );
};

export default React.memo(ChatMessage);
