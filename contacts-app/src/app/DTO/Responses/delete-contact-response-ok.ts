import { DeleteContactFromGroupResponse } from './delete-contact-from-group-response';

export class DeleteContactResponseOk  implements DeleteContactFromGroupResponse {
    Message(): string {
        return "Succed delete contact"
    }
}
