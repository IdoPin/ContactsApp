import { MyResponse } from './my-response';

export abstract class DeleteContactResponse implements MyResponse {
    abstract Message():string
}
