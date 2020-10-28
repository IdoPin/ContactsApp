import { Contact } from '../contact'

export class AddContactToGroupRequest {
    UserName:string
    contact:Contact
    groupID:number
    constructor(UserName:string,contact:Contact,groupID:number){
        this.UserName = UserName
        this.contact = contact
        this.groupID = groupID
    }
    setUserName(userName:string){
        this.UserName = userName
    }
}
