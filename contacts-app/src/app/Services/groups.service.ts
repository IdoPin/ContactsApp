import { Injectable } from '@angular/core';
import { User } from '../DTO/user';
import { Group } from '../DTO/group';
import { AddGroupRequest } from '../DTO/Requests/add-group-request';
import { DeleteGroupRequest } from '../DTO/Requests/delete-group-request';
import { Observable } from 'rxjs';
import { AddGroupResponse } from '../DTO/Responses/add-group-response';
import { DeleteGroupResponse } from '../DTO/Responses/delete-group-response';
import { LocalCommService } from './local-comm.service';
import { AddContactToGroupRequest } from '../DTO/Requests/add-contact-to-group-request';
import { AddContactToGroupResponse } from '../DTO/Responses/add-contact-to-group-response';
import { DeleteContactFromGroupRequest } from '../DTO/Requests/delete-contact-from-group-request';
import { DeleteContactFromGroupResponse } from '../DTO/Responses/delete-contact-from-group-response';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  User:User
  selectedGroup:Group

  constructor(private comm:LocalCommService) { }
  
  setUser(user:User){
    this.User = user
  }

  AddGroup(request:AddGroupRequest):Observable<AddGroupResponse>{
    request.setUserName(this.User.UserName)
    return this.comm.addGroup(request)
  }

  deleteGroup(request:DeleteGroupRequest):Observable<DeleteGroupResponse>{
    request.setUserName(this.User.UserName)
    return this.comm.deleteGroup(request)
  }
  AddContactToGroup(request:AddContactToGroupRequest):Observable<AddContactToGroupResponse>{
    request.setUserName(this.User.UserName)
    return this.comm.AddContactToGroup(request)
  }
  DeleteContactFromGroup(request:DeleteContactFromGroupRequest):Observable<DeleteContactFromGroupResponse>{
    request.setUserName(this.User.UserName)
    return this.comm.deleteContactFromGroup(request)
  }
}
