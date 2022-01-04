import { Component, OnInit } from '@angular/core';
import { IMessage } from 'src/app/models/conversation.model';

@Component({
  selector: 'app-massege',
  templateUrl: './massege.component.html',
  styleUrls: ['./massege.component.scss']
})
export class MassegeComponent implements OnInit {
  message !: IMessage;
  constructor() { }

  ngOnInit(): void {
  }

}
