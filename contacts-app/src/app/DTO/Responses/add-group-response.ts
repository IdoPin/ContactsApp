import { MyResponse } from './my-response';

export abstract class AddGroupResponse implements MyResponse {
    abstract Message():string
}
