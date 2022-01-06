import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from 'src/app/models/conversation.model';
import { IUserAccount } from 'src/app/models/user.model';
import { AccountService } from 'src/app/service/account.service';
import { DateService } from 'src/app/service/date.service';

@Component({
  selector: 'app-message',
  templateUrl: './messege.component.html',
  styleUrls: ['./messege.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() message!: IMessage;
  amISender!: boolean;
  userAccountInfo!: IUserAccount;
  convertedDate!: string;

  constructor(private accountService: AccountService, private dateService: DateService) {}

  ngOnInit(): void {
    if (
      this.accountService.accountInfo.phoneNumber ===
      this.message.senderPhoneNumber
    ) {
      this.amISender = true;
    } else {
      this.amISender = false;
    }

    this.convertedDate = this.dateService.calculateTime(this.message.createDate);
  }

 


}
