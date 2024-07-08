import axios from 'axios';
import { PostFormDataBody } from '../../interface/analytics/interface.analytics';
import { TokenKey } from '../../interface/auth/interface.auth';
import {
  IFileList,
  ISendApiProps,
  IThreadId,
  MessageProps,
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
  if (data.file !== undefined) {
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
    let newMessageData: MessageProps[] = [];

    while (true) {
      const { value, done } = await reader.read();
      data.setStreamingLoading(false);
      if (done) {
        break;
      }
      const decodedChunk = decoder.decode(value, { stream: true });
      accumulatedResponse += decodedChunk;

      newMessageData = [
        ...data.currentChatContent,
        { text: accumulatedResponse, role: 'assistant' },
      ];

      data.setStrimingContent([
        { text: accumulatedResponse, role: 'assistant' },
      ]);
    }

    data.setStreamingDone(true);
    data.setChatContent(newMessageData);

    const assistantFileList = await getAssistantFileList(data.thread_id);

    const newData: MessageProps[] = [
      ...data.currentChatContent,
      {
        text: accumulatedResponse,
        role: 'assistant',
        file_id: assistantFileList,
      },
    ];

    data.setChatContent(newData);

    return assistantFileList;
  } catch (error) {
    // 다른 에러 처리
  } finally {
  }
};

export const getChatList = async () => {
  const tokenData = getTokenData();

  const res = await axios.get<IThreadId[]>(`${DNS}:${SPRING_PORT}/chat_list`, {
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`,
      token_type: tokenData.domain,
    },
  });

  return res.data;
};

export const getChatContenet = async (threadId: string) => {
  const tokenData = getTokenData();

  const res = await axios.get<MessageProps[]>(`${DNS}:${SPRING_PORT}/store`, {
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

export const getUserSubmitFileList = async (threadId: string) => {
  const tokenData = getTokenData();

  const res = await axios.get<IFileList[]>(`${DNS}:${SPRING_PORT}/user_file`, {
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

export const sendSampleData = async (fileName: string) => {
  const tokenData = getTokenData();

  const formData = new FormData();

  formData.append('name', fileName);
  formData.append('file_name', fileName);

  const res = await axios.post(
    `${DNS}:${SPRING_PORT}/create_example`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        token_type: tokenData.domain,
      },
    }
  );

  return res.data;
};

export const getAssistantFileList = async (threadId: string) => {
  const tokenData = getTokenData();

  const res = await axios.get<string[]>(`${DNS}:${SPRING_PORT}/file_list`, {
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
