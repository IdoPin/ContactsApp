import { Injectable } from '@angular/core';
import { User } from '../DTO/user';
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
import { RegisterUserResponseFail } from '../DTO/Responses/register-user-response-fail';
import { RegisterUserResponseOk } from '../DTO/Responses/register-user-response-ok';
import { LoginResponseFail } from '../DTO/Responses/login-response-fail';
import { LoginResponseOk } from '../DTO/Responses/login-response-ok';
import { AddContactResponseFail } from '../DTO/Responses/add-contact-response-fail';
import { AddContactResponseok } from '../DTO/Responses/add-contact-responseok';
import { DeleteContactResponseOk } from '../DTO/Responses/delete-contact-response-ok';
import { UpdateContactResponseOk } from '../DTO/Responses/update-contact-response-ok';
import { UpdateContactResponseFail } from '../DTO/Responses/update-contact-response-fail';
import { AddGroupResponseOk } from '../DTO/Responses/add-group-response-ok';
import { AddGroupResponseFail } from '../DTO/Responses/add-group-response-fail';
import { DeleteGroupResponseOk } from '../DTO/Responses/delete-group-response-ok';
import { AddContactToGroupResponseOk } from '../DTO/Responses/add-contact-to-group-response-ok';
import { AddContactToGroupResponseFail } from '../DTO/Responses/add-contact-to-group-response-fail';
import { DeleteContactFromGroupResponseOk } from '../DTO/Responses/delete-contact-from-group-response-ok';
import { DeleteContactFromGroupResponseFail } from '../DTO/Responses/delete-contact-from-group-response-fail';
import { Group } from '../DTO/group';
import { Contact } from '../DTO/contact';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  users: User[]=[]
  
  constructor() {
    this.initExampleUser();
   }

  initExampleUser(){
    var exUser = new User('idopin','123','idopin@gmail.com');
    var c1 = new Contact("ido","pinhas","Dekel Eilat","www.ang.co.il",null);
        c1.setImagePath("https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg");
        c1.addPhone("050-2849684");
        c1.addPhone("050-2866666");
        c1.addMail("dghs@gmail.com");
        c1.addTelephone("08-268495");
        var c2 = new Contact("bar","cohen","Herzel Tel-Aviv","www.react.co.il",null);
        c2.setImagePath("https://1businessworld.com/wp-content/uploads/2019/05/20190502194704-ent19-june-editorsnote.jpeg");
        c2.addPhone("050-5627771");
        c2.addPhone("050-2999866");
        c2.addMail("jhkjshdd@gmail.com");
        c2.addTelephone("03-54946154");
        c2.addTelephone("03-54894218");
        var c3 = new Contact("Shlomi","taganga","Herzel Tel-Aviv","www.micro.co.il",null);
        c3.setImagePath("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzrUCpkNzYL0qyUoFPh0edSK6b0rXpreXLHg&usqp=CAU");
        c3.addPhone("050-5888881");
        c3.addPhone("050-3333336");
        c3.addMail("jshlomidd@gmail.com");
        c3.addTelephone("03-55959954");
        c3.addTelephone("03-98988718");
        exUser.addContact(c1)
        exUser.addContact(c2)
        exUser.addContact(c3)
        var group1 = new Group();
        group1.setGroupName("MYGROUP1");
        group1.setGroupDesc("this is my first group");
        group1.setGroupImg("https://image.freepik.com/free-vector/group-young-people-posing-photo_52683-18563.jpg");
        group1.addContact(c1)
        group1.addContact(c2)
        var group2 = new Group();
        exUser.addGroup(group1);
        exUser.addGroup(group2);
        this.users.push(exUser)
  }

  //Users

  registerUser(request: RegisterUserRequest): RegisterUserResponse {
    let retval: RegisterUserResponse;
    if (this.users.find(user => user.UserName === request.User.UserName)) {
      retval = new RegisterUserResponseFail()
    }
    else {
      this.users.push(request.User)
      console.log(this.users)
      retval = new RegisterUserResponseOk()
      console.log(request.User.UserName," registered")
    }
    return retval
  }

  getUser(request: LoginRequest): LoginResponse {
    let retval: LoginResponse;
    const user = this.users.find(user => user.UserName === request.UserName && user.Password === request.Password)
    if (user) {
      retval = new LoginResponseOk(user)
    }
    else {
      retval = new LoginResponseFail(user)
    }
    return retval
  }

  //Contacts

  addContact(request: AddContactRequest): AddContactResponse {
    let retval: AddContactResponse
    const user = this.users.find(user => user.UserName == request.UserName)
    if (user.contacts.find(contact => contact.contactID == request.Contact.contactID)) {
      retval = new AddContactResponseFail()

    }
    else {
      user.contacts.push(request.Contact)
      retval = new AddContactResponseok()
    }
    return retval
  }

  deleteContact(request:DeleteContactRequest):DeleteContactResponse{
    const user = this.users.find(user => user.UserName == request.UserName)
    if (user) {
      const i=user.contacts.findIndex(contact=>contact.contactID==request.ContactID)
      user.contacts.splice(i, 1)
      let retval = new DeleteContactResponseOk();
      return retval
    }
  }

  updateContact(request: UpdateContactRequest): UpdateContactResponse {
    try {
      const user = this.users.find(user => user.UserName == request.UserName);
      let foundContactIndex = user.contacts.findIndex(contact=>contact.contactID==request.ContactOut.contactID)
      user.contacts[foundContactIndex] = request.ContactIn;
      return new UpdateContactResponseOk()
    } catch{
      return new UpdateContactResponseFail()
    }
  }

  //Groups

  addGroup(request: AddGroupRequest): AddGroupResponse {

    let retval: AddContactResponse
    const user = this.users.find(user => user.UserName == request.UserName)
    if (user.groups.find(group => group.groupID == request.Group.groupID)) {
      retval = new AddGroupResponseFail()
    }
    else {
      user.groups.push(request.Group)
      retval = new AddGroupResponseOk()
    }
    return retval
  }

  deleteGroup(request:DeleteGroupRequest): DeleteGroupResponse {
    const user = this.users.find(user => user.UserName == request.UserName)
    if (user) {
      const i=user.groups.findIndex(grp=>grp.groupID==request.GroupID)
      user.groups.splice(i, 1)
      let retval = new DeleteGroupResponseOk();
      return retval
    }
  }


  // Edit Group
  
  AddContactToGroup(request: AddContactToGroupRequest): AddContactToGroupResponse {

    const user = this.users.find(user => user.UserName == request.UserName)
    var index = user.groups.findIndex(group => group.groupID == request.groupID)
    if (index>=0) {
      user.groups[index].addContact(request.contact)
      return new AddContactToGroupResponseOk()
    }else{
      return new AddContactToGroupResponseFail()
    }
  }
  deleteContactFromGroup(request:DeleteContactFromGroupRequest):DeleteContactFromGroupResponse{

    const user = this.users.find(user => user.UserName == request.UserName)
    var indexGroup = user.groups.findIndex(group => group.groupID == request.groupID)
    if (indexGroup>=0) {
      var indexContact = user.groups[indexGroup].members.findIndex(contact => contact.contactID == request.ContactID)
      if(indexContact>=0){
        user.groups[indexGroup].members.splice(indexContact,1)
        return new DeleteContactFromGroupResponseOk()
      }else{
        return new DeleteContactFromGroupResponseFail()
      }
    }else{
      return new DeleteContactFromGroupResponseFail()
    }
  }

}
