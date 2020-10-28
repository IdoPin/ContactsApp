import { RegisterUserResponse } from './register-user-response';

export class RegisterUserResponseFail implements RegisterUserResponse {
    Message(): string {
        return "Register user faild!"
    }
}
