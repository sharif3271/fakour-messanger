import { Injectable } from '@angular/core';

//TODO: Clean code
@Injectable({
  providedIn: 'root',
})
export class DateService {
  Interval!: number;
  nowDate: Date = new Date();
  constructor() {}

  calculateDate(date: number) {
    // Calculate date for last message in conversation
    let conversationDate = new Date(date);
    // Time distance in second
    this.Interval =
      (this.nowDate.getTime() - conversationDate.getTime()) / 1000;
    let time: string;
    if (this.Interval < 86400) {
  
      time = this.get_Hour_Min(date);
    } else {
      time = this.calculateDay(date);
    }

    return time;
  }

 

  get_Hour_Min(date: number) {
    const msgDate = new Date(date);
    // Time distance in second
    let hour = msgDate.getHours().toString();
    let min = msgDate.getMinutes().toString();
    if (hour.length === 1){
      hour = '0' + hour;
    }
    if (min.length === 1){
      min = '0' + min;
    }
    return hour + ':' + min;
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
