import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/DTO/contact';
import { ContactsService } from 'src/app/Services/contacts.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;
  detailsStatus = false;
  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
  }
  onSelected(){
    this.detailsStatus = !this.detailsStatus;
    this.contactsService.selectedContact = this.contact

    
  }
}
