
export interface IUpdateRepository<T> {
    update(id: string, data: T): Promise<void>;
}
