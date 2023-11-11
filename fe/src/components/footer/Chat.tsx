import React from 'react';
import styled from 'styled-components';

const ChatWrapper = styled.div`
  display: flex;
`;
const ChatInput = styled.input``;
const SubmitBtn = styled.button``;

function Chat() {
  return (
    <>
      <ChatWrapper>
        <ChatInput />
        <SubmitBtn type="submit">제출</SubmitBtn>
      </ChatWrapper>
    </>
  );
}

export default Chat;
