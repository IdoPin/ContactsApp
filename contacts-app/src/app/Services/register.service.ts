import { Injectable } from '@angular/core';
import { LocalCommService } from './local-comm.service';
import { Observable } from 'rxjs';
import { RegisterUserRequest } from '../DTO/Requests/register-user-request';
import { RegisterUserResponse } from '../DTO/Responses/register-user-response';
import { FormControl, AsyncValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private commService:LocalCommService) { }



  addUser(request:RegisterUserRequest):Observable<RegisterUserResponse>{
    return this.commService.registerUser(request)
  }
}
