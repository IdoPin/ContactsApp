import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../DTO/group';
import { Contact } from '../DTO/contact';
import { GroupsService } from '../Services/groups.service';
import { ContactsService } from '../Services/contacts.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: Group[] = [];
  contacts: Contact[] = [];

  currentGroup: Group;
  currentIndex: number;
  
  constructor(private groupService: GroupsService,
              private contactsService: ContactsService) { 
  }

  ngOnInit(): void {
    this.groups = this.groupService.User.groups;
    this.contacts = this.contactsService.getContacts();
    this.groupService.selectedGroup = this.groupService.User.groups[0]

  }

}
