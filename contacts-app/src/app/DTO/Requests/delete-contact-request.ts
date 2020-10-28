export class DeleteContactRequest {
    UserName:string
    ContactID:number
    constructor(UserName:string,ContactID:number){
        this.UserName = UserName
        this.ContactID = ContactID
    }
    setUserName(userName:string){
        this.UserName = userName
    }
}
