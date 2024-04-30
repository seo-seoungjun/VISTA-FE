import React from 'react';
import styled from 'styled-components';

const ChatWrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  border-radius: 10px;
  justify-content: center;
  width: 60%;
`;
const ChatInput = styled.input`
  transition: all 0.3s;
  text-align: center;
  width: 95%;
  margin-right: 15px;
  border-radius: 10px;
  outline: none;
  border: 0;
  &:focus {
    background-color: #8888884e;
  }
`;
const SubmitBtn = styled.button`
  display: none;
`;

function Chat({ register }: any) {
  return (
    <>
      <ChatWrapper>
        <ChatInput
          {...register('name')}
          required
          placeholder="write the chating room name"
        />
        <SubmitBtn type="submit">제출</SubmitBtn>
      </ChatWrapper>
    </>
  );
}

export default Chat;
