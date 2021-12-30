import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


const materialModules = [MatIconModule];

@Component({
  selector: 'app-msg-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandinngComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
