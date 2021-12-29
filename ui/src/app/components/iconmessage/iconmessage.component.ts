import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UserselectionComponent } from '../userselection/userselection.component';

@Component({
    selector: 'app-msg-icon',
    templateUrl: './iconmessage.component.html',
    styleUrls: ['./iconmessage.component.scss'],
})
export class IconmessageComponent{
    constructor(public dialog: MatDialog) {}
    openDialog(): void {
    const dialogRef = this.dialog.open(UserselectionComponent, {
      width:'450px',
      height:'450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}