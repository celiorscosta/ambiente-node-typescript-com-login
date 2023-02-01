export interface ICreate<T> {
    create(data: T): Promise<void>;
}
