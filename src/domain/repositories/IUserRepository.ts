import { User } from "../entities/User";
import { ICRUD } from "./base/ICrudRepository";

export interface IUserRepository extends ICRUD<User> {
    findByEmail(email: string): Promise<User | null>;
}