import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IConversation } from 'src/app/models/conversation.model';
import { IUserAccount } from 'src/app/models/user.model';
import { AccountService } from 'src/app/service/account.service';
import { DateService } from 'src/app/service/date.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
})
export class ConversationComponent implements OnInit {
  @Input() conversation!: IConversation;
  @Input() selectedConversation!: IConversation;
  @Output() conversationSelected = new EventEmitter<void>();
  userAccountInfo!: IUserAccount;
  isSenderOflastMsgMe!: boolean;

  constructor(
    private accountService: AccountService,
    private dateService: DateService
  ) {}

  ngOnInit(): void {
    this.userAccountInfo = this.accountService.accountInfo;
    this.isSenderOflastMsgMe =
      this.userAccountInfo.phoneNumber ===
      this.conversation.lastMessage.senderPhoneNumber;
  }

  onSelected() {
    this.conversationSelected.emit();
  }

  calculateDate(date: number) {
    let convertedDate = this.dateService.calculateDate(date)
    return convertedDate; 
  }

}
