import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IConversation, IMessage } from 'src/app/models/conversation.model';
import { AccountService } from 'src/app/service/account.service';
import { ChatService } from 'src/app/service/chat.service';
@Component({
  selector: 'app-message-area',
  templateUrl: './message-area.component.html',
  styleUrls: ['./message-area.component.scss'],
})
export class MessageAreaComponent implements OnInit {
  messageText!: string;
  chatMessages!: IMessage[];
  @Input() conversetion!: IConversation;
  @ViewChild('chatMessageArea', { static: false }) chatMessageArea!: ElementRef;

  constructor(
    private chatService: ChatService,
    private accountService: AccountService
  ) {}
  ngOnInit(): void {
    this.chatMessages = this.chatService.chatData;
  }

  // TODO: Add animation to send massege
  senMassege() {
    if (this.messageText) {
      const reciverPhoneNumber: string =
        this.accountService.accountInfo.phoneNumber ===
        this.conversetion.lastMessage.reciverPhoneNumber
          ? this.conversetion.lastMessage.senderPhoneNumber
          : this.conversetion.lastMessage.reciverPhoneNumber;

      const now = new Date();
      const newMassege: IMessage = {
        contentText: this.messageText,
        createDate: now.getTime(),
        reciverPhoneNumber: reciverPhoneNumber,
        senderPhoneNumber: this.accountService.accountInfo.phoneNumber,
        seen: false,
      };
      this.chatMessages.push(newMassege);
      // this.messageText = '';
    }
    // TODO: Add animation to scroll to last message
    setTimeout(() => {
      this.chatMessageArea.nativeElement.scrollTop =
        this.chatMessageArea.nativeElement.scrollHeight;
    }, 100);
  }
}
