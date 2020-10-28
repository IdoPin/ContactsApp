import { User } from '../user';

export class RegisterUserRequest {
    User:User
    constructor(user:User){
        this.User = user
    }
}
