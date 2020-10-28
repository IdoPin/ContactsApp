import { MyResponse } from './my-response';
import { User } from '../user';

export abstract class LoginResponse implements MyResponse {
    User:User
    constructor(user:User){
        this.User = user
    }
    abstract Message():string
}
