import { LoginResponse } from './login-response';
import { User } from '../user';

export class LoginResponseOk implements LoginResponse {
    User:User
    constructor(user:User){
        this.User = user
    }
    Message(): string {
        return "Succed log in"
    }
}
