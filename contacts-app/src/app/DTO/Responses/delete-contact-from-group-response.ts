import { MyResponse } from './my-response';

export abstract class DeleteContactFromGroupResponse implements MyResponse {
    abstract Message():string
}
