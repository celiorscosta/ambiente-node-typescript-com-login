import { User } from "../entities/User";
import { ICrudBase } from "./base/ICrudBase";

export interface IUserRepository extends ICrudBase<User> {
    findByEmail(email: string): Promise<User | null>;
}