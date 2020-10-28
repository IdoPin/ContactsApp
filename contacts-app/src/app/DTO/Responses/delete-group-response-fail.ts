import { DeleteGroupResponse } from './delete-group-response';

export class DeleteGroupResponseFail implements DeleteGroupResponse {
    Message(): string {
        return "Delete group failed!"
    }
}
