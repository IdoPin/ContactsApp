import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../Services/contacts.service';
import { GroupsService } from 'src/app/Services/groups.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  
})
export class UserComponent implements OnInit {

  constructor(private contactsService: ContactsService,private groupsService:GroupsService) { }

  ngOnInit(): void {
  }


}
