import { randomUUID } from "../utils";

import { Disposable } from "./Disposable";
import { Identifiable } from "./Identifiable";
import { Nameable } from "./Nameable";

/**
 * Base class for most Physics Studio objects.
 */
export abstract class BaseObject
    implements
        Identifiable,
        Nameable,
        Disposable {

    /**
     * Unique identifier.
     */
    public readonly id: string;

    /**
     * Object name.
     */
    public name: string;

    protected constructor(
        name: string
    ) {

        this.id = randomUUID();

        this.name = name;

    }

    /**
     * Releases resources.
     */
    public dispose(): void {}

}