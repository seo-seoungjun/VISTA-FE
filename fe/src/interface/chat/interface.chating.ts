import { SetterOrUpdater } from 'recoil';

export interface IChatMessageData {
  thread_id: string;
  name?: string;
  messages: MessageProps[];
}

export interface MessageProps {
  text: string;
  file_id?: string[];
  role: 'user' | 'assistant';
}

export interface ChatProps {
  data: IChatMessageData[];
  isStreamingLoading: boolean;
}

export interface IThreadId {
  thread_id: string;
  name: string;
}

export interface ISendApiProps {
  thread_id: string;
  message: string;
  file: any;
  currentChatContent: IChatMessageData[];
  setChatContent: SetterOrUpdater<IChatMessageData[]>;
  setStreamingLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setResponse: React.Dispatch<React.SetStateAction<string>>;
}

export interface IChatFormData {
  message: string;
  file?: any;
}
