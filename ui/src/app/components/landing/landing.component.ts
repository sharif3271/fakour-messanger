import { Component, OnInit } from '@angular/core';
import { IConversation } from 'src/app/models/conversation.model';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-msg-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations:[
    
  ]
})
// TODO: Add animation for open massage area
export class LandinngComponent implements OnInit {
  selectedConversetion!: IConversation;

  constructor() {}
  ngOnInit(): void {}


  
}