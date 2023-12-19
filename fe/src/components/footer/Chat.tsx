import React from 'react';
import styled from 'styled-components';

const ChatWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 70%;
  bottom: 2%;
`;
const ChatInput = styled.input`
  width: 80%;
  margin-right: 15px;
`;
const SubmitBtn = styled.button``;

function Chat({ register }: any) {
  return (
    <>
      <ChatWrapper>
        <ChatInput {...register('user_message')} />
        <SubmitBtn type="submit">제출</SubmitBtn>
      </ChatWrapper>
    </>
  );
}

export default Chat;
