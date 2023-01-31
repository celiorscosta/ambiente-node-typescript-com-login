import { ICreate } from "./ICreate";
import { IDelete } from "./IDelete";
import { IRead } from "./IRead";
import { IUpdate } from "./IUpdate";

export interface ICRUD<T> extends ICreate<T>, IRead<T>, IUpdate<T>, IDelete { }