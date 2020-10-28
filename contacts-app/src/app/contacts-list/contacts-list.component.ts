import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Contact } from '../DTO/contact'
import { ContactsService } from '../Services/contacts.service';
import { DeleteContactRequest } from '../DTO/Requests/delete-contact-request';



@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent implements OnInit {
  
  contacts: Contact[] = [];

  deleteResponse = ""

  showCreateSection = false;
  showEditSection = false;
  showDeleteSection = false;
  


  constructor(private contactsService: ContactsService) {

   }

  ngOnInit(): void {
    this.contacts = this.contactsService.User.contacts
  }

  onClickNewContact(){
    this.showCreateSection = !this.showCreateSection;
    this.showEditSection = false;
    this.showDeleteSection = false;
  }

  onClickEditContact(){
    this.showCreateSection = false;
    if(this.contactsService.selectedContact.contactID != 0)
      this.showEditSection = !this.showEditSection;
    this.showDeleteSection = false;
  }
  onClickDelContact(){
    this.showCreateSection = false;
    this.showEditSection = false;
    if(this.contactsService.selectedContact.contactID != 0)
      this.showDeleteSection = !this.showDeleteSection;
  }
  onClickDelYes(){
    this.contactsService.deleteContact(new DeleteContactRequest(null,this.contactsService.selectedContact.contactID))
    .subscribe(
      DeleteContactResponse => this.deleteResponse = DeleteContactResponse.Message()
    )
    if(this.deleteResponse="Succed delete contact"){
      console.log("Succed delete contact")
      this.onClickDelContact()
    }
  }
  onClickDelNo(){
    this.showDeleteSection = false;
    
  }


}
