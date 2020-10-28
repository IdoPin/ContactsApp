import { MyResponse } from './my-response';

export abstract class AddContactResponse implements MyResponse {
    abstract Message():string
}
