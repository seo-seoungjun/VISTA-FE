export interface IInitialMessage {
  user_message: string | undefined;
}

export interface MessageProps {
  data: any;
  isUser: boolean;
}

export interface ChatProps {
  messages: MessageProps[];
}
