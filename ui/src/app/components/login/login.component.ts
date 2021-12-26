import { Component,OnInit } from '@angular/core';
import{AbstractControl,FormBuilder,FormControl, FormGroup, ValidatorFn, ValidationErrors, Validators} from '@angular/forms';
import {UserService} from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-msg-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
submitted=false;
loginForm!: FormGroup;

constructor (
  private formBuilder:FormBuilder,
  private userService: UserService,
  private router: Router
  ){}

ngOnInit():void {
  this.loginForm = this.formBuilder.group({
    phoneNumber:[
        null, Validators.compose([
          Validators.required,
          CustomValidators.patterValidator(/[0-9]/,{hasCodeNumber : true}),
          CustomValidators.patterValidator(/[0-9]{11}$/, {hasElevenNumber:true})
        ])
    ],
    password:[
    null,
    Validators.compose([
      Validators.required,
      CustomValidators.patterValidator(/[0-9]/,{hasNumber:true})
    ])
    ]
  })
}

get formControl():{[key:string]:AbstractControl}{
  return this.loginForm.controls;
}
onSubmit() {
  this.userService.login(this.loginForm.value).subscribe(res => {
    if (res && res.token) {
      localStorage.setItem('token', res.token);
      this.router.navigate([''])
    } else {
      this.loginForm.reset();
    }
  })
}
}
export class CustomValidators {
  static patterValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control:AbstractControl):any=>{
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
}
