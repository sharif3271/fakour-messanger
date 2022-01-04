import { Component, OnInit, Optional, Inject } from '@angular/core';
import { IUserAccount } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
@Component({
    selector: 'app-msg-select-user',
    templateUrl: './userselection.component.html',
    styleUrls: ['./userselection.component.scss'],

})

export class UserselectionComponent  implements OnInit{
    select_user: any;
    users: IUserAccount[] = [];
    constructor(private userService: UserService,
        public dialogRef: MatDialogRef<UserselectionComponent>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
        
    }

    ngOnInit(): void {
        this.userService.getAllUsers().subscribe(res => {
            this.users=res;
          })
    }
    get_iduser(user: any){
        this.select_user = user;
    }
    closeDialog() { 
       this.dialogRef.close(this.select_user);
    }
}


