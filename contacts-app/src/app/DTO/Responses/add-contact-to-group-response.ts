import { MyResponse } from './my-response';

export abstract class AddContactToGroupResponse implements MyResponse {
    abstract Message():string
}
