import { Contact } from '../contact'

export class UpdateContactRequest {
    UserName:string
    ContactIn:Contact
    ContactOut:Contact
    constructor(userName:string,contactIn:Contact,contactOut:Contact){
        this.UserName = userName
        this.ContactIn = contactIn
        this.ContactOut = contactOut
    }
    setUserName(userName:string){
        this.UserName = userName
    }
}
