import { Injectable } from '@angular/core';
import { IMessage } from '../models/conversation.model';


@Injectable({
  providedIn: 'root',
})
export class ChatService {
  chatData: IMessage[] = [
    {
      contentText: 'Hello.',
      createDate: 1640937014303,
      senderPhoneNumber: '09356528942',
      reciverPhoneNumber: '09356528945',
      seen: true,
    },
    {
      contentText: 'Hi threre.',
      createDate: 1640937014503,
      senderPhoneNumber: '09356528945',
      reciverPhoneNumber: '09356528942',
      seen: true,
    },
    {
      contentText: 'I would like some infomation about the Fakour Massenger plz.',
      createDate: 1640937015303,
      senderPhoneNumber: '09356528942',
      reciverPhoneNumber: '09356528945',
      seen: true,
    },
  ];

  sendMassege(massage:IMessage){
    this.chatData.push(massage);
  }
}
