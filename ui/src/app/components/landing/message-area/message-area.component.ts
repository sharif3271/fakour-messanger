import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  IConversation,
  IMessage
} from 'src/app/models/conversation.model';
import { AccountService } from 'src/app/service/account.service';
import { ChatService } from 'src/app/service/chat.service';
import { DateService } from 'src/app/service/date.service';
// TODO: Grouped messages date fix on top
@Component({
  selector: 'app-message-area',
  templateUrl: './message-area.component.html',
  styleUrls: ['./message-area.component.scss'],
})
export class MessageAreaComponent implements OnInit {
  messageText!: string;
  chatMessages!: IMessage[];
  // Grouped by time chat messages
  groupedChatMessages: { [key: string]: IMessage[] } = {};
  @Input() conversetion!: IConversation;
  @ViewChild('chatMessageArea', { static: false }) chatMessageArea!: ElementRef;

  constructor(
    private chatService: ChatService,
    private accountService: AccountService,
    private dateService: DateService
  ) {}
  ngOnInit(): void {
    this.chatMessages = this.chatService.chatData;
    this.groupChatMessage();
  }

  // TODO: Add animation to send message
  sendMessage() {
    if (this.messageText) {
      const reciverPhoneNumber: string =
        this.accountService.accountInfo.phoneNumber ===
        this.conversetion.lastMessage.reciverPhoneNumber
          ? this.conversetion.lastMessage.senderPhoneNumber
          : this.conversetion.lastMessage.reciverPhoneNumber;

      const now = new Date();
      const newMessage: IMessage = {
        contentText: this.messageText,
        createDate: now.getTime(),
        reciverPhoneNumber: reciverPhoneNumber,
        senderPhoneNumber: this.accountService.accountInfo.phoneNumber,
        seen: false,
      };
      this.chatMessages.push(newMessage);
      this.addToGroupMessage(newMessage);
      this.messageText = '';
    }
    // TODO: Add animation to scroll to last message
    // FIXME: Btter way for scrolling on last message (chatMessages length ) 
    setTimeout(() => {
      this.chatMessageArea.nativeElement.scrollTop =
        this.chatMessageArea.nativeElement.scrollHeight;
    }, 100);
  }

  groupChatMessage() {
    for (let msg of this.chatMessages) {
      this.addToGroupMessage(msg);
    }
    console.log(this.groupedChatMessages);
  }

  addToGroupMessage(newMsg: IMessage) {
    let msgDay = this.dateService.calculateDay(newMsg.createDate);
    if (msgDay in this.groupedChatMessages) {
      this.groupedChatMessages[msgDay].push(newMsg);
    } else {
      this.groupedChatMessages[msgDay] = [newMsg];
    }
  }
}
