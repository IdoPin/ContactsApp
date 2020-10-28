import { AddContactResponse } from './add-contact-response';

export class AddContactResponseok implements AddContactResponse {
    Message(): string {
        return "Succed adding contact"
    }
}
