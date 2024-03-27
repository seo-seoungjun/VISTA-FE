import { selector } from 'recoil';
import { IInitialMessage } from '../../interface/chat/interface.chating';
import { fileUpLoadSettings } from '../analytics/atom.settings';

export const initialMessage = selector<IInitialMessage>({
  key: 'initial_message',
  get: ({ get }) => {
    const { user_message } = get(fileUpLoadSettings);
    return { user_message };
  },
});
