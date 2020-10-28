import { Injectable } from '@angular/core';
import { CommService } from './comm.service';
import { RepositoryService } from './repository.service';
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
import { UpdateGroupResponse } from '../DTO/Responses/update-group-response';
import { AddContactToGroupResponse } from '../DTO/Responses/add-contact-to-group-response';
import { DeleteContactFromGroupResponse } from '../DTO/Responses/delete-contact-from-group-response';
import { DeleteContactRequest } from '../DTO/Requests/delete-contact-request';
import { UpdateContactRequest } from '../DTO/Requests/update-contact-request';
import { AddGroupRequest } from '../DTO/Requests/add-group-request';
import { DeleteGroupRequest } from '../DTO/Requests/delete-group-request';
import { UpdateGroupRequest } from '../DTO/Requests/update-group-request';
import { AddContactToGroupRequest } from '../DTO/Requests/add-contact-to-group-request';
import { DeleteContactFromGroupRequest } from '../DTO/Requests/delete-contact-from-group-request';

@Injectable({
  providedIn: 'root'
})
export class LocalCommService implements CommService {

  constructor(private repositoryService: RepositoryService) { }

  registerUser(request: RegisterUserRequest): Observable<RegisterUserResponse> {
    return new Observable<RegisterUserResponse>(
      subscriber => {
         subscriber.next(this.repositoryService.registerUser(request))
      })
  }

  getUser(request: LoginRequest): Observable<LoginResponse> {
    return new Observable<LoginResponse>(
      subscriber => {
        subscriber.next(this.repositoryService.getUser(request))
      })
  }

  addContact(request: AddContactRequest): Observable<AddContactResponse> {
    return new Observable<AddContactResponse>(
      subscriber => {
        subscriber.next(this.repositoryService.addContact(request))
      })
  }

  deleteContact(request:DeleteContactRequest):Observable<DeleteContactResponse>{
    return new Observable<DeleteContactResponse>(
      subscriber => {
        subscriber.next(this.repositoryService.deleteContact(request))
      })
  }

  updateContact(request: UpdateContactRequest): Observable<UpdateContactResponse> {
    return new Observable<UpdateContactResponse>(
      subscriber => {
        subscriber.next(this.repositoryService.updateContact(request))
      })
  }

  addGroup(request: AddGroupRequest): Observable<AddGroupResponse> {
    return new Observable<AddGroupResponse>(
      subscriber => {
        subscriber.next(this.repositoryService.addGroup(request))
      })
  }

  deleteGroup(request: DeleteGroupRequest): Observable<DeleteGroupResponse> {
    return new Observable<DeleteGroupResponse>(
      subscriber => {
        subscriber.next(this.repositoryService.deleteGroup(request))
      })
  }



  AddContactToGroup(request: AddContactToGroupRequest): Observable<AddContactToGroupResponse> {
    return new Observable<AddContactToGroupResponse>(
      subscriber => {
        subscriber.next(this.repositoryService.AddContactToGroup(request))
      })
  }

  deleteContactFromGroup(request:DeleteContactFromGroupRequest):Observable<DeleteContactFromGroupResponse>{
    return new Observable<DeleteContactFromGroupResponse>(
      subscriber => {
        subscriber.next(this.repositoryService.deleteContactFromGroup(request))
      })
  }

}
