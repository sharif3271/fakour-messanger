export interface IMessage {
    contentText: string;
    createDate: number;
    senderPhoneNumber: string;
    reciverPhoneNumber: string;
    seen: boolean;
}

export interface IConversation {
    title: string;
    lastMessage: IMessage;
}