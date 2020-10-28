export class DeleteContactFromGroupRequest {
    UserName:string
    groupID:number
    ContactID:number
    constructor(UserName:string,groupID:number,ContactID:number){
        this.UserName = UserName
        this.groupID = groupID
        this.ContactID = ContactID
    }
    setUserName(userName:string){
        this.UserName = userName
    }
}
