import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../Services/register.service';
import { ThrowStmt } from '@angular/compiler';
import { RegisterUserRequest } from '../DTO/Requests/register-user-request';
import { User } from '../DTO/user';
import { RegisterUserResponse } from '../DTO/Responses/register-user-response';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {


  form: FormGroup
  password:string
  registerResponse:string

  constructor(private router: Router,private registerService: RegisterService) { }

  get userName() { return this.form.get('userName'); }
  get email() { return this.form.get('email'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }

  ngOnInit(): void {
    this.form = new FormGroup({
      'userName': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
      'confrimPassword': new FormControl(null, [Validators.required,this.validatePassword.bind(this)]),
    });
  }

  onClickSumbit() {
    this.registerService.addUser(new RegisterUserRequest(new User(this.userName.value,this.form.get('password').value,this.email.value)))
    .subscribe(
      RegisterUserResponse => this.registerResponse = RegisterUserResponse.Message()
    )
    if(this.registerResponse=="Succed register user"){
      this.router.navigate(['/log-in'])
    }
  }

  validatePassword(control: FormControl): {[s:string]: boolean} {
    if(control.value!=this.password){
      return {'unConfirmed': true}
    }
    return null
  }
}
