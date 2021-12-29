import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {ConversationServices} from '../../service/conversation.service';
import { IConversation } from 'src/app/models/conversation.model';


const materialModules = [MatIconModule];

@Component({
    selector: 'app-msg-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
  })

export class LandinngComponent implements OnInit {

  conversationList: IConversation[] = [];

  constructor(private conversationService: ConversationServices) {
    
  }
  ngOnInit(): void {
    this.conversationService.getAllConversations().subscribe(res => {
      this.conversationList = res;
      console.log(res);
    });
  }
  getAllUser() {}
}
