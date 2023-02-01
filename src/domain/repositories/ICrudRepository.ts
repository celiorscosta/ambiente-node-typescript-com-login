import { ICreate } from "./ICreateRepository";
import { IDelete } from "./IDeleteRepository";
import { IRead } from "./IReadRepository";
import { IUpdate } from "./IUpdateRepository";

export interface ICRUD<T> extends ICreate<T>, IRead<T>, IUpdate<T>, IDelete { }