import { Component , OnInit} from '@angular/core';
import { AbstractControl,FormBuilder,FormControl,FormGroup,ValidatorFn,ValidationErrors,Validators } from '@angular/forms' ;
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
    selector:'app-msg-password',
    templateUrl:'./password.compnent.html',
    styleUrls:['./password.compnent.scss']
})
export class PasswordComponent implements OnInit{
  submitted = false;
  passwordForm!: FormGroup;
  constructor(private formBuilder:FormBuilder , private userService:UserService , private router:Router){
  
  }

ngOnInit():void{
  this.passwordForm = this.formBuilder.group({
    newPassword :[null,Validators.compose([
      Validators.required,
        CustomValidators.patterValidator(/[0-9]/,{hasNumber:true})])],
    confirmPassword:[null,Validators.compose([
      Validators.required,
      ])],
},{ 
  validator: CustomValidators.passwordMatchValidator
}
);
}

get fromControl():{[key:string]:AbstractControl}{
return this.passwordForm.controls;
}
  

  onSubmit() {
  this.userService.password(this.passwordForm.value).subscribe(res => {
    if (res && res.token) {
      localStorage.setItem('token', res.token);
      this.router.navigate([''])
    } else {
      this.passwordForm.reset();
    }
  })
}
}
 

export class CustomValidators{
  static patterValidator(regex:RegExp , error:ValidationErrors):ValidatorFn{ 
    return(control:AbstractControl): any =>{
      if(!control.value){
      return null;
      }
      const isValid = regex.test(control.value);
      if (isValid)
        return null;
      else
        return error;
    };
  }
  public static passwordMatchValidator (control:AbstractControl){
    const newPassword : string = control.get("newPassword")?.value;
    const confirmPassword : string = control.get("confirmPassword")?.value;
    if (newPassword != confirmPassword){
      control.get("confirmPassword")?.setErrors({NoPasswordMatch :true })
    }
  }
}
  
