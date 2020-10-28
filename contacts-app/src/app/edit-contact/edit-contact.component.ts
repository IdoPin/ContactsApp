import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Validators, FormControl, FormArray, FormGroup } from '@angular/forms';
import { ContactsService } from '../Services/contacts.service';
import { Contact } from '../DTO/contact';
import { UpdateContactRequest } from '../DTO/Requests/update-contact-request';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  form: FormGroup
  currentContact:Contact
  updateRespone = ""
  @Output() hideEditSec = new EventEmitter<boolean>();

  constructor(private contactsService:ContactsService) { }

  get firstName() {return this.form.get('firstName')}
  get lastName() {return this.form.get('lastName')}
  get address() {return this.form.get('address')}
  get website() {return this.form.get('website')}
  get imgPath() {return this.form.get('imgPath')}
  get phone() {return this.form.get('phone')}
  get telephone() {return this.form.get('telephone')}
  get email() {return this.form.get('email')}

  get phoneControls() {
    return (this.form.get('phone') as FormArray).controls;
  }
  get emailControls() {
    return (this.form.get('email') as FormArray).controls;
  }
  get telePhoneControls() {
    return (this.form.get('telephone') as FormArray).controls;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'firstName': new FormControl(null, [Validators.required]),
      'lastName': new FormControl(null, [Validators.required]),
      'address': new FormControl(null),
      'website': new FormControl(null),
      'imgPath': new FormControl(null),
      'phone': new FormArray([]),
      'telephone': new FormArray([]),
      'email':new FormArray([]),
    });
    this.currentContact = this.contactsService.selectedContact
    this.initParams();
  }

  onClickSumbit(){
    var newUser = new Contact(this.firstName.value,this.lastName.value,this.address.value,this.website.value,this.imgPath.value)
    this.phone.value.forEach(el => {
      newUser.addPhone(el)
    });
    this.telephone.value.forEach(el => {
      newUser.addTelephone(el)
    });
    this.email.value.forEach(el => {
      newUser.addMail(el)
    });
    this.contactsService.editContact(new UpdateContactRequest(null,newUser,this.contactsService.selectedContact))
    .subscribe(
      UpdateContactResponse => this.updateRespone = UpdateContactResponse.Message()
    )
    if(this.updateRespone=="Succed update contact"){
      console.log(this.updateRespone)
    }
    this.hideEditSec.emit();
  }


  onClickAddPhone(s:string){
    var control = new FormControl(s);
    (<FormArray>this.form.get('phone')).push(control)
  }

  onClickAddTelephone(s:string){
    var control = new FormControl(s);
    (<FormArray>this.form.get('telephone')).push(control)
  }

  onClickAddMail(s:string){
    var control = new FormControl(s,[Validators.email]);
    (<FormArray>this.form.get('email')).push(control)
  }
  initParams(){
    this.firstName.setValue(this.currentContact.firstName)
    this.lastName.setValue(this.currentContact.lastName)
    this.address.setValue(this.currentContact.address)
    this.website.setValue(this.currentContact.website)
    this.imgPath.setValue(this.currentContact.imagePath)
    for (let i = 0; i < this.currentContact.phones.length; i++) {
      this.onClickAddPhone(this.currentContact.phones[i])
      
    }
    for (let i = 0; i < this.currentContact.telephones.length; i++) {
      this.onClickAddTelephone(this.currentContact.telephones[i])
      
    }
    for (let i = 0; i < this.currentContact.mails.length; i++) {
      this.onClickAddMail(this.currentContact.mails[i])
      
    }

  }
}
