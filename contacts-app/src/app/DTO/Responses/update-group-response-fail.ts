import { UpdateGroupResponse } from './update-group-response';

export class UpdateGroupResponseFail implements UpdateGroupResponse {
    Message(): string {
        return "Update group failed!"
    }
}
