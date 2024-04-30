import axios from 'axios';
import { PostFormDataBody } from '../../interface/analytics/interface.analytics';
import { TokenKey } from '../../interface/auth/interface.auth';
import {
  IChatMessageData,
  ISendApiProps,
} from '../../interface/chat/interface.chating';

require('dotenv').config();

const DNS = process.env.REACT_APP_DNS;
const SPRING_PORT = process.env.REACT_APP_PORT;

const getTokenData = () => {
  const tokenData = JSON.parse(
    localStorage.getItem(TokenKey.accessToken) as string
  );
  return tokenData;
};

export const createChat = async (data: PostFormDataBody) => {
  const tokenData = getTokenData();

  const res = await axios.post(`${DNS}:${SPRING_PORT}/create`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${tokenData.access_token}`,
      token_type: tokenData.domain,
    },
  });

  return res.data;
};

export const sendChat = async (data: ISendApiProps) => {
  const tokenData = getTokenData();

  const formData = new FormData();

  formData.append('message', data.message);
  formData.append('thread_id', data.thread_id);
  if (data.file != undefined) {
    formData.append('file', data.file);
  }

  try {
    data.setStreamingLoading(true);
    const response = await fetch(`${DNS}:${SPRING_PORT}/chat`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        token_type: tokenData.domain,
      },
      body: formData,
    });
    if (!response.ok || !response.body) {
      throw response.statusText;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let accumulatedResponse = '';

    while (true) {
      const { value, done } = await reader.read();
      data.setStreamingLoading(false);
      if (done) {
        break;
      }
      const decodedChunk = decoder.decode(value, { stream: true });
      accumulatedResponse += decodedChunk;
      data.setResponse(accumulatedResponse);

      const newData: IChatMessageData = {
        thread_id: data.thread_id,
        messages: [
          ...data.currentChatContent[0]?.messages,
          { text: accumulatedResponse, role: 'assistant' },
        ],
      };

      data.setChatContent([newData]);
    }
  } catch (error) {
    // 다른 에러 처리
  } finally {
    //파일 얻는 api 호출
    //thread_id로 api 호출하면 해당 스레드의 맨 마지막 어시스턴트 메시지의 파일 아이디 전달
  }
};

export const getChatList = async () => {
  const tokenData = getTokenData();

  const res = await axios.get(`${DNS}:${SPRING_PORT}/chat_list`, {
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`,
      token_type: tokenData.domain,
    },
  });

  return res.data;
};

export const getChatContenet = async (threadId: string) => {
  const tokenData = getTokenData();

  const res = await axios.get(`${DNS}:${SPRING_PORT}/store`, {
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`,
      token_type: tokenData.domain,
    },
    params: {
      thread_id: threadId,
    },
  });

  return res.data;
};
