import { Group } from '../group'

export class AddGroupRequest {
    UserName:string
    Group:Group
    constructor(userName:string,Group:Group){
        this.UserName = userName
        this.Group = Group
    }
    setUserName(userName:string){
        this.UserName = userName
    }
}
