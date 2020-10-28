import { DeleteContactFromGroupResponse } from './delete-contact-from-group-response';

export class DeleteContactResponseFail implements DeleteContactFromGroupResponse {
    Message(): string {
        return "Delete contact failed"
    }
}
