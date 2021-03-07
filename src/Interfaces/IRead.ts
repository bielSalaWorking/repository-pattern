interface IRead<T>{
    findOne(entity: T): Promise<T>;
    findAll(entity: T): Promise<T[]>;
}