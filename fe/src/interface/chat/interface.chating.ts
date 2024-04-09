export interface IInitialMessage {
  user_message: string | undefined;
}

export interface MessageProps {
  data: any;
  role: boolean;
}

export interface ChatProps {
  messages: MessageProps[];
}
