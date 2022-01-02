import { Component, OnInit } from '@angular/core';
import { IConversation } from 'src/app/models/conversation.model';





@Component({
  selector: 'app-msg-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandinngComponent implements OnInit {
  selectedConversetion!: IConversation;

  constructor() {}
  ngOnInit(): void {
  }
}
