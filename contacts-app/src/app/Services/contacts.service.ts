import { Injectable } from '@angular/core';
import { LocalCommService } from './local-comm.service';
import { User } from '../DTO/user';
import { AddContactRequest } from '../DTO/Requests/add-contact-request';
import { Observable } from 'rxjs';
import { AddContactResponse } from '../DTO/Responses/add-contact-response';
import { UpdateContactRequest } from '../DTO/Requests/update-contact-request';
import { UpdateContactResponse } from '../DTO/Responses/update-contact-response';
import { Contact } from '../DTO/contact';
import { DeleteContactRequest } from '../DTO/Requests/delete-contact-request';
import { DeleteContactResponse } from '../DTO/Responses/delete-contact-response';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  User:User
  selectedContact:Contact

  constructor(private comm:LocalCommService) {}

  setUser(user:User){
    this.User = user
  }
  getUserFromRepository(usernName:string){
    return this.User
  }
  getContacts(){
    return this.User.contacts
  }
  AddContact(request:AddContactRequest):Observable<AddContactResponse>{
    request.setUserName(this.User.UserName)
    return this.comm.addContact(request)
  }

  editContact(request:UpdateContactRequest):Observable<UpdateContactResponse>{
    request.setUserName(this.User.UserName)
    return this.comm.updateContact(request)
  }

  deleteContact(request:DeleteContactRequest):Observable<DeleteContactResponse>{
    request.setUserName(this.User.UserName)
    return this.comm.deleteContact(request)
  }


}
