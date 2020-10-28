import { AddContactToGroupResponse } from './add-contact-to-group-response';

export class AddContactToGroupResponseFail implements AddContactToGroupResponse {
    Message(): string {
        return "Adding contact to group faild!"
    }
}
