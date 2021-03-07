abstract class BaseRepository<T, Ttype> implements IRead<T>, IWrite<T> {
    findOne(entity: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
    findAll(entity: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    save(entity: T): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(entity: T): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(entity: T): Promise<void> {
        throw new Error("Method not implemented.");
    }
}