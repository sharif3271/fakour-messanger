import { Component, OnInit } from '@angular/core';
import { ConversationServices } from 'src/app/service/conversation.service';
import { IConversation } from 'src/app/models/conversation.model';
@Component({
  selector: 'app-left-menue',
  templateUrl: './left-menue.component.html',
  styleUrls: ['./left-menue.component.scss'],
})
export class LeftMenueComponent implements OnInit {
  conversationList: IConversation[] = [];

  constructor(private conversationService: ConversationServices) {
    
  }
  ngOnInit(): void {
    this.conversationService.getAllConversations().subscribe((res) => {
      this.conversationList = res;
      console.log(res);
    });
  }
}
