import { UpdateGroupResponse } from './update-group-response';

export class UpdateGroupResponseOk implements UpdateGroupResponse {
    Message(): string {
        return "Succed update group"
    }
}
