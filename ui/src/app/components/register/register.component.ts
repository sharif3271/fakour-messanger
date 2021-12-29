import { IUserCreateModel } from './../../models/user.model';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
    selector: 'app-msg-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],

})
export class RegisterComponent implements OnInit{
  hide=true;
  registerForm!: FormGroup;

constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router) {

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
  console.log(this.registerForm.value);
  const userCreateDto:IUserCreateModel={
    firstName:this.registerForm.value.firstName,
    lastName:this.registerForm.value.lastName,
    phoneNumber:this.registerForm.value.phoneNumber,
    password:this.registerForm.value.password,
  }
  this.userService.createUser(userCreateDto).subscribe((res) =>{
    this.router.navigate(['/login']);
    (error: any)=>console.log(error);

  })


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

