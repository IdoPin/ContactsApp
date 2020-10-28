import { LoginResponse } from './login-response';
import { User } from '../user';

export class LoginResponseFail implements LoginResponse {
    User:User
    constructor(user:User){
        this.User = user
    }
    Message(): string {
        return "Log in failed!"
    }
}
