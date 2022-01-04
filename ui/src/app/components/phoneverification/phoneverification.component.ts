import { Router } from '@angular/router';
import { Component } from "@angular/core";
import { interval,map,Observable,take,timer } from "rxjs";

@Component({
  selector: 'app-msg-phoneverification',
  templateUrl: './phoneverification.component.html',
  styleUrls: ['./phoneverification.component.scss'],

})
export class phoneVerification {
  second: number = 59;
  interval:any;
  minute:number = 1;
  constructor(private router:Router){}
 ngOnInit(): void {
   this.interval = interval(1000).subscribe((x) =>{
    if(this.second > 0) {
      this.second--;
    } else if(this.minute > 0) {
      this.minute--;
      this.second = 59;
    }else{
      this.router.navigate(['/register'])
    }

   } )

   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.

 }
 move(e:any, previous: HTMLInputElement | null, current: HTMLInputElement, next: HTMLInputElement | null) {
   const length = current.value.length;
    if(length ===  1){
      if(next){
        next.focus();
      }
    }
    if(e.key === "Backspace" ){
      if(previous){
        previous.focus();
      }
    }
 }
}
