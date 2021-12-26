import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalcontentComponent } from '../modalcontent/modalcontent.component';

@Component({
    selector: 'app-msg-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent{
    constructor(public dialog: MatDialog) {}
    openDialog(): void {
    const dialogRef = this.dialog.open(ModalcontentComponent, {
      width:'450px',
      height:'450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}