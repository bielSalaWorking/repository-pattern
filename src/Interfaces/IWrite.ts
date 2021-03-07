interface IWrite<T> {
    save(entity: T): Promise<void>
    delete(entity: T): Promise<void>
    update(entity: T): Promise<void>
}