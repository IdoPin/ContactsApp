import { DeleteContactFromGroupResponse } from './delete-contact-from-group-response';

export class DeleteContactFromGroupResponseOk implements DeleteContactFromGroupResponse {
    Message(): string {
        return "Succed delete contact from group"
    }
}
