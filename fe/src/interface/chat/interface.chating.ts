import { fileId } from './../../atoms/analytics/atom.analytics';
import { SetterOrUpdater } from 'recoil';

export interface IChatMessageData {
  thread_id: string;
  name?: string;
  messages: MessageProps[];
}

export interface MessageProps {
  text: string | null;
  file_id?: string[];
  role: 'user' | 'assistant';
}

export interface ChatProps {
  thread_id: string;
  data: MessageProps[] | null;
  isStreamingLoading: boolean;
}

export interface IMessageProps {
  thread_id?: string;
  data: MessageProps[] | null;
  isStreamingDone?: boolean;
}

export interface IThreadId {
  thread_id: string;
  name: string;
}

export interface ISendApiProps {
  thread_id: string;
  message: string;
  file: any;
  currentChatContent: MessageProps[];
  setChatContent: SetterOrUpdater<MessageProps[]>;
  setStrimingContent: React.Dispatch<
    React.SetStateAction<null | MessageProps[]>
  >;
  setStreamingLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setStreamingDone: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IChatFormData {
  message: string;
  file?: any;
}

export interface UserFileComponentProps {
  thread_id: string;
  fileId: string[];
}

export interface IAssistantFileComponentProps {
  fileId: string;
}

export interface IFileList {
  [key: string]: string;
}
