import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useMutation, useQuery } from 'react-query';
import styled from 'styled-components';
import SideBar from '../components/navbar/SideBar';
import { useAuth } from '../hooks/auth';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getChatContenet, sendChat } from '../APIs/chat/api.chat';
import { userMessages } from '../atoms/chat/atom.chat';
import {
  IChatFormData,
  MessageProps,
} from '../interface/chat/interface.chating';
import ChatMessage from '../components/chat/ChatMessage';
import Loading from '../components/loading/Loading';
import SideBarToggleBtn from '../components/navbar/SideBarToggleBtn';
import StrimingMessage from '../components/chat/StrimingMessage';

const Section = styled.div`
  display: flex;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: 14fr 2fr;
  background-color: #ffffff;
  width: 100%;
  height: 100vh;
`;

const AnalyticsWrapper = styled.div`
  overflow: auto;
  border-radius: 15px 15px 0px 0px;
  padding: 20px 30px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const ChatFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatForm = styled.form`
  width: 60%;
`;

const ChatWrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const ChatInput = styled.input`
  transition: all 0.3s;
  text-align: center;
  width: 100%;
  height: 30px;
  border-radius: 10px;
  outline: none;
  border: 0;
  &:focus {
    background-color: #8888884e;
  }
`;

const FileInputWrapper = styled.label`
  display: inline-block;
  padding: 5px 10px;
  background-color: #f0f0f0;
  color: #333;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const FileInput = styled.input`
  display: none;
`;

const FileName = styled.span``;
const FileUploadError = styled.span`
  color: red;
  margin-left: 10px;
`;

const SubmitBtn = styled.button`
  display: none;
`;

const ChatContainer = styled.div`
  width: 85%;
  border-radius: 10px;
  padding: 10px;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function ChatRoom() {
  const params = useParams<{ thread_id: string }>();

  const [createStreamingLoading, setCreateStreamingLoading] = useState(false);
  const [streamingDone, setStreamingDone] = useState(false);
  const [strimingMessage, setStrimingMessage] = useState<MessageProps[] | null>(
    null
  );

  const [fileName, setFileName] = useState();
  const [userMessage, setUserMessage] = useRecoilState(userMessages);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      message: '',
      file: '',
    },
  });

  const THREAD_ID = params.thread_id;
  const auth = useAuth();

  const { mutate: getChatContentMutate, isLoading: isChatContentLoading } =
    useMutation(getChatContenet, {
      // onError: (e) => console.log(e),
      onSuccess: (chatContent) => {
        chatContent.reverse();
        chatContent[0].text = null;
        setUserMessage(chatContent);
      },
    });

  useEffect(() => {
    auth();
    getChatContentMutate(THREAD_ID);
  }, [THREAD_ID]);

  const { mutate, isLoading: chatMutateLoading } = useMutation(sendChat, {
    onSuccess: (res) => {
      // console.log(res);
    },
    onError: (e) => {
      // console.log(e);
    },
  });

  useEffect(() => {
    const chatInput = document.querySelector('#chatInput') as HTMLInputElement;
    if (chatInput !== null) {
      if (chatMutateLoading) {
        chatInput.disabled = true;
      } else {
        chatInput.disabled = false;
      }
    }
  }, [chatMutateLoading]);

  const onHadleSubmit = (data: IChatFormData) => {
    let newData: MessageProps[];

    if (userMessage[0] !== undefined) {
      if (data.file[0] !== undefined) {
        newData = [
          ...userMessage,
          { text: data.file[0].name, role: 'user' },
          { text: data.message, role: 'user' },
        ];
      } else {
        newData = [...userMessage, { text: data.message, role: 'user' }];
      }

      setUserMessage(newData);
    } else {
      if (data.file[0] !== undefined) {
        newData = [
          { text: data.file[0].name, role: 'user' },
          { text: data.message, role: 'user' },
        ];
      } else {
        newData = [{ text: data.message, role: 'user' }];
      }
      setUserMessage(newData);
    }

    mutate({
      message: data.message,
      thread_id: THREAD_ID,
      setStreamingLoading: setCreateStreamingLoading,
      setStreamingDone: setStreamingDone,
      file: data.file[0],
      currentChatContent: newData,
      setChatContent: setUserMessage,
      setStrimingContent: setStrimingMessage,
    });
  };

  return (
    <>
      <Section>
        <SideBar />
        <SideBarToggleBtn />
        <GridWrapper>
          <AnalyticsWrapper>
            {isChatContentLoading ? (
              <Loading />
            ) : (
              <>
                <ChatMessage
                  thread_id={THREAD_ID}
                  isStreamingLoading={createStreamingLoading}
                  data={userMessage}
                />
                <ChatContainer>
                  <MessageContainer>
                    <StrimingMessage
                      isStreamingDone={streamingDone}
                      data={strimingMessage}
                    />
                  </MessageContainer>
                </ChatContainer>
              </>
            )}
          </AnalyticsWrapper>
          <ChatFormWrapper>
            <ChatForm
              onSubmit={handleSubmit(onHadleSubmit)}
              encType="multipart/form-data"
            >
              <ChatWrapper>
                <FileInputWrapper>
                  <FileName>{fileName ? fileName : 'No file chosen'}</FileName>
                  <FileInput
                    {...register('file', {
                      required: false,
                      // validate: (value: any) => {
                      //   const acceptedFormats = ['csv', 'json'];
                      //   const fileExtension = value[0]?.name
                      //     .split('.')
                      //     .pop()
                      //     .toLowerCase();
                      //   if (!acceptedFormats.includes(fileExtension)) {
                      //     return 'Invalid file format. Only csv or files are allowed.';
                      //   }
                      // },
                      onChange: (e: any) => {
                        setFileName(e?.target?.files[0]?.name);
                      },
                    })}
                    type="file"
                  />
                </FileInputWrapper>
                <FileUploadError>
                  {errors?.file?.message as any}
                </FileUploadError>
                <ChatInput
                  required
                  {...register('message')}
                  id="chatInput"
                  placeholder="change x axis label to meter per second"
                ></ChatInput>
                <SubmitBtn type="submit">제출</SubmitBtn>
              </ChatWrapper>
            </ChatForm>
          </ChatFormWrapper>
        </GridWrapper>
      </Section>
    </>
  );
}

export default ChatRoom;
