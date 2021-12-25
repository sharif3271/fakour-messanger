import { IAuthUser } from "../user-entity/user.model";


export interface ISendMessageBody {
    reciverPhoneNumber: string;
    textContent: string;
    contentType?: string;
    conversationId?: number;
}

export interface ISendMessageReq {
    body: ISendMessageBody;
    user: IAuthUser;
}
