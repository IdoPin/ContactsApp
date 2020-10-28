import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { GroupsComponent } from './groups/groups.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';


const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'contacts', component:ContactsListComponent},
  {path:'groups',component:GroupsComponent},
  {path:'log-in',component:LoginPageComponent},
  {path:'sign-up',component:SignupPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
