import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterUserRequest } from '../DTO/Requests/register-user-request';
import { RegisterUserResponse } from '../DTO/Responses/register-user-response';
import { LoginRequest } from '../DTO/Requests/login-request';
import { LoginResponse } from '../DTO/Responses/login-response';
import { AddContactRequest } from '../DTO/Requests/add-contact-request';
import { AddContactResponse } from '../DTO/Responses/add-contact-response';
import { DeleteContactResponse } from '../DTO/Responses/delete-contact-response';
import { UpdateContactResponse } from '../DTO/Responses/update-contact-response';
import { AddGroupResponse } from '../DTO/Responses/add-group-response';
import { DeleteGroupResponse } from '../DTO/Responses/delete-group-response';
import { AddContactToGroupResponse } from '../DTO/Responses/add-contact-to-group-response';
import { DeleteContactFromGroupResponse } from '../DTO/Responses/delete-contact-from-group-response';
import { DeleteContactRequest } from '../DTO/Requests/delete-contact-request';
import { UpdateContactRequest } from '../DTO/Requests/update-contact-request';
import { AddGroupRequest } from '../DTO/Requests/add-group-request';
import { DeleteGroupRequest } from '../DTO/Requests/delete-group-request';
import { AddContactToGroupRequest } from '../DTO/Requests/add-contact-to-group-request';
import { DeleteContactFromGroupRequest } from '../DTO/Requests/delete-contact-from-group-request';

@Injectable({
  providedIn: 'root'
})
export abstract class CommService {

  constructor() { }
  //Users
  abstract registerUser(request: RegisterUserRequest): Observable<RegisterUserResponse>
  abstract getUser(request: LoginRequest): Observable<LoginResponse>
  //Contacts
  abstract addContact(request: AddContactRequest): Observable<AddContactResponse>
  abstract deleteContact(request:DeleteContactRequest):Observable<DeleteContactResponse>
  abstract updateContact(request: UpdateContactRequest): Observable<UpdateContactResponse>
  //Groups
  abstract addGroup(request: AddGroupRequest): Observable<AddGroupResponse>
  abstract deleteGroup(request: DeleteGroupRequest): Observable<DeleteGroupResponse>
  //Edit group
  abstract AddContactToGroup(request: AddContactToGroupRequest): Observable<AddContactToGroupResponse>
  abstract deleteContactFromGroup(request:DeleteContactFromGroupRequest):Observable<DeleteContactFromGroupResponse>


}
