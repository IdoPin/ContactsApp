import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginRequest } from '../DTO/Requests/login-request';
import { LogInService } from '../Services/log-in.service';
import { ContactsService } from '../Services/contacts.service';
import { LoginResponse } from '../DTO/Responses/login-response';
import { GroupsService } from '../Services/groups.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup
  LogResponse:LoginResponse
  incorrect = false

  constructor(private router: Router,private LogInService:LogInService,private contactsService: ContactsService,private groupService:GroupsService) { }

  get UserName() {return this.form.get('userName')}
  get Password() {return this.form.get('password')}

  ngOnInit(): void {
    this.form = new FormGroup({
      'userName': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
    })
  }

  onClickSumbit() {
    this.LogInService.LogIn(new LoginRequest(this.UserName.value,this.Password.value)).
    subscribe(
      LoginResponse => this.LogResponse = LoginResponse
    )
    if(this.LogResponse.Message()=="Succed log in"){
      console.log('log-in succed')
      this.contactsService.setUser(this.LogResponse.User)
      this.groupService.setUser(this.LogResponse.User)
      this.incorrect = false
      this.router.navigate(['/contacts'])
    }else if(this.LogResponse.Message()=="Log in failed!"){
      this.incorrect = true
    }
  }


}
