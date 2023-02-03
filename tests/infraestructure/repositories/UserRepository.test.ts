import { UserRepository } from "../../../src/infraestructure/repositories/UserRepository";
import { User } from "../../../src/domain/entities/User";

const makeSut = (): UserRepository => {
    return new UserRepository();
};

describe("UserRepository", () => {
    it("should be able to create a user", async () => {
        const sut = makeSut();
        const user = new User({
            id: null,
            name: "Lucas",
            email: "lucas@email.com",
            password: "password",
        });

        const createdUser = await sut.create(user);
        expect(createdUser).toEqual(user);
    });

    it("should be able to find a user by email", async () => {
        const sut = makeSut();
        const user = new User({
            id: null,
            name: "Lucas",
            email: "lucas@email.com",
            password: "password",
        });
        const createdUser = await sut.create(user);
        const foundUser = await sut.findByEmail("email@email.com");
        expect(foundUser).toEqual(createdUser);
    });

    it("should return null if no user was found with the email", async () => {
        const sut = makeSut();
        const user = await sut.findByEmail("invalid_email@email.com");
        expect(user).toBeNull();
    });
});
