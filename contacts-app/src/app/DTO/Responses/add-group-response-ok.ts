import { AddGroupResponse } from './add-group-response';

export class AddGroupResponseOk implements AddGroupResponse{
    Message(): string {
       return "Succed adding group"
    }
}
