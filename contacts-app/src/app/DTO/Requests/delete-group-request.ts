export class DeleteGroupRequest {
    UserName:string
    GroupID:number
    constructor(userName:string,GroupID:number){
        this.UserName = userName
        this.GroupID = GroupID
    }
    setUserName(userName:string){
        this.UserName = userName
    }
}
