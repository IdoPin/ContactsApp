import { UpdateContactResponse } from './update-contact-response';

export class UpdateContactResponseFail implements UpdateContactResponse {
    Message(): string {
        return "Update contact failed"
    }
}
