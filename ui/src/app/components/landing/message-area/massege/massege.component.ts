import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from 'src/app/models/conversation.model';
import { IUserAccount } from 'src/app/models/user.model';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-massege',
  templateUrl: './massege.component.html',
  styleUrls: ['./massege.component.scss'],
})
export class MassegeComponent implements OnInit {
  @Input() message!: IMessage;
  amISender!: boolean;
  userAccountInfo!: IUserAccount;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    if (
      this.accountService.accountInfo.phoneNumber ===
      this.message.senderPhoneNumber
    ) {
      this.amISender = true;
    } else {
      this.amISender = false;
    }
  }
}
