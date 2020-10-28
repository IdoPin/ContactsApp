import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactItemComponent } from './contacts-list/contact-item/contact-item.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupsListComponent } from './groups/groups-list/groups-list.component';
import { GroupsDetailsComponent } from './groups/groups-details/groups-details.component';
import { DropdownDirective } from './dropdown.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupItemComponent } from './groups/group-item/group-item.component';
import { UserComponent } from './user/user.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactsService } from './Services/contacts.service';
import { GroupsService } from './Services/groups.service';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsListComponent,
    ContactItemComponent,
    GroupsComponent,
    GroupsListComponent,
    GroupsDetailsComponent,
    DropdownDirective,
    GroupItemComponent,
    UserComponent,
    LoginPageComponent,
    SignupPageComponent,
    AddContactComponent,
    EditContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContactsService,GroupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
