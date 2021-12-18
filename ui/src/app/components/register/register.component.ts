import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
    selector: 'app-msg-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],

})
export class RegisterComponent implements OnInit{
  submitted=false;
  registerForm!: FormGroup;

constructor(private formBuilder:FormBuilder) {

}
  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      firstName:[null,Validators.compose([Validators.required,Validators.minLength(4)])],
      lastName:[null,Validators.compose([Validators.required,Validators.minLength(4)])],
        phoneNumber:[null,Validators.compose([
          Validators.required,
          CustomValidators.patterValidator(/09/,{hasCodeNumber:true}),
          CustomValidators.patterValidator(/[0-9]{11}$/,{hasElevenNumbers:true})])],
        password:[null,Validators.compose([
          Validators.required,
          CustomValidators.patterValidator(/[0-9]/,{hasNumber:true}),
          CustomValidators.patterValidator(/[a-z]/,{hasSmallCase:true})])],
        retypePassword:[null,Validators.compose([
          Validators.required,
        ])],
    },{
       validator :CustomValidators.passwordMatchValidator
    }
   );
  }

get fromControl(): { [key :string]:AbstractControl}{
  return this.registerForm.controls;
}
onSubmit(){
  console.log(this.registerForm);
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

public static passwordMatchValidator(control:AbstractControl){
  const password: string = control.get("password")?.value;
  const retypePassword: string = control.get("retypePassword")?.value;
  if(password != retypePassword){
    control.get("retypePassword")?.setErrors({NoPasswordMatch:true})
  }
}
}

