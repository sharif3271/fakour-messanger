import { Component,OnInit } from '@angular/core';
import{AbstractControl,FormBuilder,FormControl,FormGroup,ValidationError,Validators} from '@angular/form';

@Component({
    selector: 'app-msg-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
submitted=false;
  loginForm!: FormGroup;

constructor (private formBuilder:FormBuilder){

}
ngOnInit():void{
this.loginForm = this.formBuilder.group({
phoneNumber:[null, Validators.compose([
    Validators.required,
    CustomValidators.patterValidator(/[0-9]/,{hasCodeNumber : true),
    CustomValidators.patterValidator(/[0-9]{11}$/, {hasElevenNumber:true})])],
 password:[null,Validators.compose([
    Validators.required,
    CustomValidators.patterValidator(/[0-9]/,{hasNumber:true})
});
}

get formControl():{[key:string]:AbstractControl}{
  return this.loginForm.Controls;
}
onSubmit(){ console.log(this.loginForm);
          return this.submitted=true;
          }
}
export class CustomValidators{
static patterValidator(regex:RegExp,error:ValidationErrors):ValidatorFn{
  return(control:AbstractControl):any=>{
    if(!control.value){
      return null;
    }
    const isValid = regex.test(control.value);
    if(isValid)
    return null;
    else
    return error;
  };
}
