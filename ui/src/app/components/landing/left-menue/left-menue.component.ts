import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConversationServices } from 'src/app/service/conversation.service';
import { IConversation } from 'src/app/models/conversation.model';
import { MatDialog } from '@angular/material/dialog';
import { UserselectionComponent } from '../../userselection/userselection.component';
import { AccountService } from 'src/app/service/account.service';
import { IUserAccount } from 'src/app/models/user.model';

@Component({
  selector: 'app-left-menue',
  templateUrl: './left-menue.component.html',
  styleUrls: ['./left-menue.component.scss'],
})
export class LeftMenueComponent implements OnInit {
  conversationList: IConversation[] = [];
  initalconversationList: IConversation[] = [];
  searchResult: IConversation[] = [];
  selectedConversetion!: IConversation;
  userAccountInfo!: IUserAccount;

  @Output() conversetionWasSelected = new EventEmitter<IConversation>();

  constructor(
    private conversationService: ConversationServices,
    public dialog: MatDialog,
    private accountService: AccountService
  ) {}


  ngOnInit(): void {
    this.conversationService.getAllConversations().subscribe((res) => {
      this.initalconversationList = res;
      this.conversationList = this.initalconversationList;
      // console.log(res);
    });

    this.userAccountInfo = this.accountService.accountInfo;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(UserselectionComponent, {
      width: '450px',
      height: '450px',
    });
    dialogRef.afterClosed().subscribe((user) => {
      if (user) {
        console.log({ user });
      }
    });
  }


  onConversationSelected(conversetion: IConversation) {
    this.selectedConversetion = conversetion;
    this.conversetionWasSelected.emit(conversetion);
  }

  onConversationSearch(event: Event) {
    let searchInput = (<HTMLInputElement>event.target).value;
    this.searchResult = [];
    for (const conversation of this.initalconversationList) {
      let title: string = conversation.title.toLowerCase();
      searchInput = searchInput.toLowerCase();
      if (title.includes(searchInput)) {
        this.searchResult.push(conversation);
      }
    }
    this.conversationList = this.searchResult;
  }
}
