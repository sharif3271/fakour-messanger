import { Component, Input, OnInit } from '@angular/core';
import { IConversation } from 'src/app/models/conversation.model';

@Component({
  selector: 'app-message-area',
  templateUrl: './message-area.component.html',
  styleUrls: ['./message-area.component.scss'],
})
export class MessageAreaComponent implements OnInit {
  chatActive: boolean = true;
  @Input() conversetion!: IConversation;
  constructor() {}
  ngOnInit(): void {
    
  }
}
