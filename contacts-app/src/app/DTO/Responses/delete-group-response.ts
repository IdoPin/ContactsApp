import { MyResponse } from './my-response';

export abstract class DeleteGroupResponse implements MyResponse {
    abstract Message():string
}
