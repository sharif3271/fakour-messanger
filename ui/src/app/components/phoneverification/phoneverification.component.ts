import { Component } from "@angular/core";


@Component({
  selector: 'app-msg-phoneverification',
  templateUrl: './phoneverification.component.html',
  styleUrls: ['./phoneverification.component.scss'],

})
export class phoneVerification {
 ngOnInit(): void {
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
