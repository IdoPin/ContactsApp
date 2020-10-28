import { Injectable } from '@angular/core';
import { LocalCommService } from './local-comm.service';
import { LoginRequest } from '../DTO/Requests/login-request';
import { Observable } from 'rxjs';
import { LoginResponse } from '../DTO/Responses/login-response';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private commService:LocalCommService) { }

  LogIn(request:LoginRequest):Observable<LoginResponse>{
    return this.commService.getUser(request);
  }

}
