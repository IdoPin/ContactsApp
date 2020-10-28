import { Contact } from '../contact'

export class AddContactRequest {
    UserName:string
    Contact:Contact
    constructor(userName:string,contact:Contact){
        this.UserName = userName
        this.Contact = contact
    }
    setUserName(userName:string){
        this.UserName = userName
    }
}
