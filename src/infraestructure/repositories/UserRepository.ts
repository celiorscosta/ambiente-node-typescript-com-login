import { PrismaClient } from "@prisma/client";
import { User } from "src/domain/entities/User";
import { IUserRepository } from "src/domain/repositories/IUserRepository";

export class UserRepository implements IUserRepository {
    private prisma = new PrismaClient();

    async create(data: User): Promise<User> {
        try {
            const createdUser = await this.prisma.user.create({
                data: data,
            });
            return createdUser;
        } catch (error) {
            throw new Error(`Failed to create user: ${error.message}`);
        }
    }

    async findByEmail(email: string): Promise<User> {
        try {
            const user = await this.prisma.user.findOne({
                where: { email },
            });
            return user || null;
        } catch (error) {
            throw new Error(`Failed to retrieve user with email ${email}: ${error.message}`);
        }
    }

    async findAll(): Promise<User[]> {
        try {
            const users = await this.prisma.user.findMany();
            return users;
        } catch (error) {
            throw new Error(`Failed to retrieve users: ${error.message}`);
        }
    }

    async findById(id: string): Promise<User> {
        try {
            const user = await this.prisma.user.findOne({
                where: { id },
            });
            return user || null;
        } catch (error) {
            throw new Error(`Failed to retrieve user with id ${id}: ${error.message}`);
        }
    }

    async update(id: string, data: User): Promise<void> {
        try {
            const updatedUser = await this.prisma.user.update({
                where: { id: id },
                data: data,
            });
            return updatedUser;
        } catch (error) {
            throw new Error(`Failed to update user with id ${id}: ${error.message}`);
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await this.prisma.user.delete({
                where: { id },
            });
        } catch (error) {
            throw new Error(`Failed to delete user with id ${id}: ${error.message}`);
        }
    }

}
