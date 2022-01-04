import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IConversation } from 'src/app/models/conversation.model';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
})
export class ConversationComponent implements OnInit {
  @Input() conversation!: IConversation;
  @Input() selectedConversation!: IConversation;
  @Output() conversationSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onSelected() {
    this.conversationSelected.emit();
  }

  calculateTime(date: number) {
    let conversationDate = new Date(date);
    let nowDate = new Date();
    // Time distance in second
    let Interval = (nowDate.getTime() - conversationDate.getTime()) / 1000;
    let time: string = '';
    if (Interval < 86400) {
      let hour = conversationDate.getHours().toString();
      let min = conversationDate.getMinutes().toString();
      time = hour + ':' + min;
    } else if (Interval < 2 * 86400) {
      time = 'yesterday';
    } else if (Interval < 7 * 86400) {
      let dayNum = conversationDate.getDay();
      time = this.getWeekDay(dayNum);
    } else {
      let year = conversationDate.getFullYear().toString();
      let month = conversationDate.getMonth().toString();
      let utcDate = conversationDate.getUTCDate().toString();

      time = month + '/' + utcDate + '/' + year;
    }

    return time;
  }

  private getWeekDay(dayNum: number): string {
    // Recive number of day in week and return week day
    let day: string = '';
    switch (dayNum) {
      case 0:
        day = 'Sunday';
        break;
      case 1:
        day = 'Monday';
        break;
      case 2:
        day = 'Tuesday';
        break;
      case 3:
        day = 'Wednesday';
        break;
      case 4:
        day = 'Thursday';
        break;
      case 5:
        day = 'Friday';
        break;
      case 6:
        day = 'Saturday';
    }

    return day;
  }
}
