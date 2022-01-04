import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ConversationServices } from 'src/app/service/conversation.service';
import { IConversation } from 'src/app/models/conversation.model';
import { MatDialog } from '@angular/material/dialog';
import { UserselectionComponent } from '../../userselection/userselection.component';

@Component({
  selector: 'app-left-menue',
  templateUrl: './left-menue.component.html',
  styleUrls: ['./left-menue.component.scss'],
})
export class LeftMenueComponent implements OnInit {
  conversationList: IConversation[] = [];
  selectedConversetion!: IConversation;
  @Output() conversetionWasSelected = new EventEmitter<IConversation>();
  

  constructor(private conversationService: ConversationServices, public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(UserselectionComponent, {
      width:'450px',
      height:'450px',
    });  
       dialogRef.afterClosed().subscribe(user => {
         if(user) {
           console.log({user})
         }
      });
  }
  ngOnInit(): void {
    this.conversationService.getAllConversations().subscribe((res) => {
      this.conversationList = res;
      // console.log(res);
    });
  }
  onConversationSelected(conversetion:IConversation) {
    this.selectedConversetion = conversetion;
    this.conversetionWasSelected.emit(conversetion);
  }
}

