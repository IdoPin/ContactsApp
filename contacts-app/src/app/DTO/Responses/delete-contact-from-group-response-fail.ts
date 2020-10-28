import { DeleteContactFromGroupResponse } from './delete-contact-from-group-response';

export class DeleteContactFromGroupResponseFail implements DeleteContactFromGroupResponse {
    Message(): string {
        return "Delete contact from group failed!"
    }
}
