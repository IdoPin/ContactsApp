import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Contact } from '../DTO/contact';
import { ContactsService } from '../Services/contacts.service';
import { AddContactRequest } from '../DTO/Requests/add-contact-request';
import { AddContactResponse } from '../DTO/Responses/add-contact-response';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  form: FormGroup
  @Output() hideAddSec = new EventEmitter<boolean>();
  addRespone = ""

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
    this.contactsService.AddContact(new AddContactRequest(null,newUser))
    .subscribe(
      AddContactResponse => this.addRespone = AddContactResponse.Message()
    )
    if(this.addRespone=="Succed adding contact"){
      console.log(this.addRespone)
    }
    this.hideAddSec.emit();


  }

  onClickAddPhone(){
    var control = new FormControl(null);
    (<FormArray>this.form.get('phone')).push(control)
  }

  onClickAddTelephone(){
    var control = new FormControl(null);
    (<FormArray>this.form.get('telephone')).push(control)
  }

  onClickAddMail(){
    var control = new FormControl(null,[Validators.email]);
    (<FormArray>this.form.get('email')).push(control)
  }

}
