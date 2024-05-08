import { atom } from 'recoil';
import {
  IThreadId,
  MessageProps,
} from '../../interface/chat/interface.chating';

export const userMessages = atom<MessageProps[]>({
  key: 'userMessages',
  default: [],
});

export const promptMessages = atom<MessageProps[]>({
  key: 'promptMessages',
});

export const chatList = atom<IThreadId[]>({
  key: 'chatList',
  default: [],
});

export const streamingResponse = atom<string>({
  key: 'response',
  default: '',
});

export const isChatLoading = atom<boolean>({
  key: 'isChatLoading',
  default: false,
});
