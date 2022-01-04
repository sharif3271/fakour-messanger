import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserselectionComponent } from '../../userselection/userselection.component';

@Component({
  selector: 'app-left-menue',
  templateUrl: './left-menue.component.html',
  styleUrls: ['./left-menue.component.scss']
})
export class LeftMenueComponent implements OnInit {
 

  constructor(public dialog: MatDialog) { }
  openDialog(): void {
  const dialogRef = this.dialog.open(UserselectionComponent, {
    width:'450px',
    height:'450px',
  });  
     dialogRef.afterClosed().subscribe(result => {
       
    });

  }
  ngOnInit(): void {
  }

}

