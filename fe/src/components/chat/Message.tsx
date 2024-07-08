import React from 'react';
import styled from 'styled-components';
import UserFile from './UserFile';
import AssistantFile from './AssistantFile';
import {
  IMessageProps,
  MessageProps,
} from '../../interface/chat/interface.chating';

const Messages = styled.div<{ $role: 'user' | 'assistant' }>`
  background-color: ${({ $role }) =>
    $role === 'user' ? '#e6f7ff' : '#f4f4f4'};
  color: ${({ $role }) => ($role === 'user' ? '#000000' : '#000000')};
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 20px;
  align-self: ${({ $role }) => ($role === 'user' ? 'flex-end' : 'flex-start')};
`;

function Message({ data, thread_id }: IMessageProps) {
  return (
    <>
      {data && (
        <>
          {data.map((data, index) => (
            <Messages key={index} $role={data.role}>
              {data?.text}
              {data.role === 'user' &&
                data.file_id !== undefined &&
                data.file_id?.length !== 0 && (
                  <UserFile
                    key={index}
                    thread_id={thread_id as string}
                    fileId={data.file_id}
                  />
                )}
              {data.role === 'assistant' &&
                data.file_id !== undefined &&
                data.file_id?.length !== 0 &&
                data.file_id.map((fileId) => (
                  <AssistantFile key={fileId} fileId={fileId} />
                ))}
            </Messages>
          ))}
        </>
      )}
    </>
  );
}

export default Message;
