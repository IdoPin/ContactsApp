import { AddGroupResponse } from './add-group-response';

export class AddGroupResponseFail implements AddGroupResponse {
    Message(): string {
        return "adding group has failed!"
    }
}
