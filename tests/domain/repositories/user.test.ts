import { User } from '../../../src/domain/entities/User.js';
import { IUserRepository } from '../../../src/domain/repositories/IUserRepository.js';

describe('IUserRepository interface', () => {
    it('should have the required methods', () => {
        // Aqui, estamos criando uma variável chamada "repository" que implementa a interface "IUserRepository".
        const repository: IUserRepository = {
            // Aqui, estamos definindo o método "findById" para retornar um Promise de um objeto.
            findById: (id: string) => Promise.resolve<User | null>(null),
            // Aqui, estamos definindo o método "findByEmail" para retornar um Promise de um objeto.
            findByEmail: (email: string) => Promise.resolve<User | null>(null),
            // Aqui, estamos definindo o método "findAll" para retornar um Promise de um array de objetos.
            findAll: () => Promise.resolve<User[]>([]),
            // Aqui, estamos definindo o método "create" para retornar um Promise de um objeto.
            create: (user: User) => Promise.resolve<User>(user),
            // Aqui, estamos definindo o método "update" para retornar um Promise de um objeto.
            update: (id: string, user: any) => Promise.resolve({ id, ...user }),
            // Aqui, estamos definindo o método "delete" para retornar um Promise.
            delete: (id: string) => Promise.resolve(),
        };

        // Aqui, estamos esperando que a interface tenha todos os métodos requeridos.
        expect(repository).toHaveProperty('findById');
        expect(repository).toHaveProperty('findByEmail');
        expect(repository).toHaveProperty('findAll');
        expect(repository).toHaveProperty('create');
        expect(repository).toHaveProperty('update');
        expect(repository).toHaveProperty('delete');
    });
});
