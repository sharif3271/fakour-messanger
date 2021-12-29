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
 move(e:any,previous:any,corrent:any,next:any){
   var length = corrent.value.length;
   var maxlength = corrent.getAttribute('maxLength');
    if(length ==  maxlength){
      if(next != ""){
        next.focus();
      }
    }
    if(e.key === "Backspace" ){
      if(previous != ""){
        previous.focus();
      }

    }
   console.log(corrent,previous);
 }





}
