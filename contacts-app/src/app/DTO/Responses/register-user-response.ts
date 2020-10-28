import { MyResponse } from './my-response';

export abstract class RegisterUserResponse implements MyResponse {
    abstract Message():string
}
