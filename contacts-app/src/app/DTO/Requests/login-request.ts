export class LoginRequest {
    UserName:string
    Password:string
    constructor(userName:string,password:string){
        this.UserName = userName
        this.Password = password
    }
}
