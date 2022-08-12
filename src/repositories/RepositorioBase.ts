import { FirebaseApp } from "firebase/app";
import { Firestore } from "firebase/firestore";

export interface IWrite<T> {
    add(item: T): Promise<string>;
    update(item: T): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}

export interface IRead<T> {
    get(item: T): Promise<T[]>
}

export abstract class RepositorioBase<T> implements IWrite<T>, IRead<T> {
    protected abstract readonly _collection: string;

    add(item: T): Promise<string> {
        throw new Error('Method not implemented.');
    }

    update(item: T): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    delete(id: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    get(item: T): Promise<T[]> {
        throw new Error('Method not implemented.');
    }
}