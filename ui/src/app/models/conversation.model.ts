export interface IMessage {
  contentText: string;
  createDate: number; //In Seconds
  senderPhoneNumber: string;
  reciverPhoneNumber: string;
  seen: boolean;
}

export interface IConversation {
  title: string;
  lastMessage: IMessage;
}
