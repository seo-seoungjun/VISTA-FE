import React from 'react';
import styled from 'styled-components';

const ChatWrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  border-radius: 10px;
  justify-content: center;
  position: fixed;
  width: 60%;
  height: 4%;
  bottom: 2%;
`;
const ChatInput = styled.input`
  width: 95%;
  margin-right: 15px;
  border-radius: 10px;
  outline: none;
  border: 0;
`;
const SubmitBtn = styled.button`
  display: none;
`;

function Chat({ register }: any) {
  return (
    <>
      <ChatWrapper>
        <ChatInput
          {...register('user_message')}
          placeholder="change x axis label to meter per second"
        />
        <SubmitBtn type="submit">제출</SubmitBtn>
      </ChatWrapper>
    </>
  );
}

export default Chat;
