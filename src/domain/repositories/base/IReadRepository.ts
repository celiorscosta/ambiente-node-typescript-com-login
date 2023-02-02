
export interface IReadRepository<T> {
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T | null>;
}
