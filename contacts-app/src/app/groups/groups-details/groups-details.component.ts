import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Group } from 'src/app/DTO/group';
import { Contact } from 'src/app/DTO/contact';
import { GroupsService } from 'src/app/Services/groups.service';
import { ContactsService } from 'src/app/Services/contacts.service';
import { AddContactToGroupRequest } from 'src/app/DTO/Requests/add-contact-to-group-request';
import { DeleteContactFromGroupRequest } from 'src/app/DTO/Requests/delete-contact-from-group-request';


@Component({
  selector: 'app-groups-details',
  templateUrl: './groups-details.component.html',
  styleUrls: ['./groups-details.component.css']
})
export class GroupsDetailsComponent implements OnInit {
 
  groups: Group[];
  currentGroup:Group
  contacts: Contact[]= [];
  addContacts: Contact[] =[];

  addResponse = ""
  delRespone = ""

  showAddingContacts = false;

 
  constructor(public groupService: GroupsService,
              private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.groups = this.groupService.User.groups
    this.currentGroup = this.groupService.selectedGroup
    this.contacts = this.contactsService.getContacts()
    
  }

  onClickAddContactToGroup(){
    this.showAddingContacts = !this.showAddingContacts;
    // getting contacts thats not in the group
    this.addContacts = this.contacts.filter(i1 => !this.groupService.selectedGroup.members.some(i2 => i1.contactID === i2.contactID));
  
  }
  addContactToGroup(){
    this.groupService.AddContactToGroup(new AddContactToGroupRequest(null,this.contactsService.selectedContact,this.groupService.selectedGroup.groupID))
    .subscribe(
      AddContactToGroupResponse => this.addResponse = AddContactToGroupResponse.Message()
    )
    if(this.addResponse="Succed ading contact to group"){
      console.log("Succed ading contact to group")
      this.showAddingContacts = false
    }
  }
  deleteContactFRomGroup(){
    this.groupService.DeleteContactFromGroup(new DeleteContactFromGroupRequest(null,this.groupService.selectedGroup.groupID,this.contactsService.selectedContact.contactID))
    .subscribe(
      DeleteContactFromGroupResponse => this.delRespone = DeleteContactFromGroupResponse.Message()
    )
    if(this.delRespone=="Succed delete contact from group"){
      console.log("Succed delete contact from group")
    }
  }

   
}
