import { MyResponse } from './my-response';

export abstract class UpdateContactResponse implements MyResponse {
    abstract Message():string
}
