import { AddContactResponse } from './add-contact-response';

export class AddContactResponseFail implements AddContactResponse {
    Message(): string {
        return "Adding contact failed!"
    }
}
