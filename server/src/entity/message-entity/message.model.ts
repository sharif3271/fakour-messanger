import { IAuthUser } from "../user-entity/user.model";


export interface ISendMessageBody {
    reciverPhoneNumber: string;
    textContent: string;
    contentType?: string;
    conversationId?: number;
}

export interface IReqUser {
    user: IAuthUser;
}

export interface ISendMessageReq extends IReqUser{
    body: ISendMessageBody;
}
