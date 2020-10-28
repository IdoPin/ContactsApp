import { DeleteGroupResponse } from './delete-group-response';

export class DeleteGroupResponseOk implements DeleteGroupResponse {
    Message(): string {
        return "Succed delete group"
    }
}
