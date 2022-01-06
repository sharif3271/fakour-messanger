import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  Interval!: number;
  nowDate: Date = new Date();
  constructor() {}

  calculateTime(date: number) {
    // Calculate date for last message in conversation
    let conversationDate = new Date(date);
    // Time distance in second
    this.Interval =
      (this.nowDate.getTime() - conversationDate.getTime()) / 1000;
    let time: string;
    if (this.Interval < 86400) {
      let hour = conversationDate.getHours().toString();
      let min = conversationDate.getMinutes().toString();
      time = hour + ':' + min;
    } else {
      time = this.calculateDay(date);
    }

    return time;
  }

  calculateDay(date: number) {
    let time: string;
    let conversationDate = new Date(date);
    this.Interval =
    (this.nowDate.getTime() - conversationDate.getTime()) / 1000;
    if (this.Interval < 86400) {
      time = 'today';
    } else if (this.Interval < 2 * 86400) {
      time = 'yesterday';
    } else if (this.Interval < 7 * 86400) {
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
