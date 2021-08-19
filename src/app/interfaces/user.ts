import { eRole } from './enum/role.enum';

export interface iUser {
    id: string;
    email: string;
    password: string;
    role: eRole;
}
