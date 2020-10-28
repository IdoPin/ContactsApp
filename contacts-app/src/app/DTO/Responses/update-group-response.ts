import { MyResponse } from './my-response';

export abstract class UpdateGroupResponse implements MyResponse {
    abstract Message():string
}
