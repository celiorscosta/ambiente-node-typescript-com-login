import { User } from "src/domain/entities/User";
import { IUserRepository } from "src/domain/repositories/IUserRepository";

export class UserRepository implements IUserRepository {
    findByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    create(data: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    update(id: string, data: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}