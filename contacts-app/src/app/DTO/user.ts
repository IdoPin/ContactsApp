import { Contact } from './contact'
import { Group } from './group'

export class User {
    UserName:string
    Password:string
    Email:string
    contacts:Contact[]=[]
    groups:Group[]=[]

    constructor(userName:string,password:string,email:string){
        this.UserName = userName
        this.Password = password
        this.Email = email
    }

    addContact(contact:Contact){
        this.contacts.push(contact)
    }
    addGroup(group:Group){
        this.groups.push(group)
    }
}
