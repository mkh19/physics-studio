/**
 * Physics Studio
 * Common reusable types.
 */

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type Constructor<T = object> = new (...args: never[]) => T;

export type DeepReadonly<T> = {
    readonly [K in keyof T]:
        T[K] extends object
            ? DeepReadonly<T[K]>
            : T[K];
};

export type Mutable<T> = {
    -readonly [K in keyof T]: T[K];
};

export type Dictionary<T> = Record<string, T>;

export type JsonPrimitive =
    | string
    | number
    | boolean
    | null;

export type JsonValue =
    | JsonPrimitive
    | JsonObject
    | JsonArray;

export interface JsonObject {
    [key: string]: JsonValue;
}

export interface JsonArray extends Array<JsonValue> {}

export interface Disposable {
    dispose(): void;
}

export interface Updatable {
    update(deltaTime: number): void;
}

export interface Cloneable<T> {
    clone(): T;
}

export interface Serializable<T> {
    serialize(): T;
}

export interface Deserializable<T> {
    deserialize(data: T): void;
}