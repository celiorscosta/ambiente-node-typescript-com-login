import { ICreateRepository } from "./ICreateRepository";
import { IDeleteRepository } from "./IDeleteRepository";
import { IReadRepository } from "./IReadRepository";
import { IUpdateRepository } from "./IUpdateRepository";

export interface ICRUD<T> extends ICreateRepository<T>, IReadRepository<T>, IUpdateRepository<T>, IDeleteRepository { }