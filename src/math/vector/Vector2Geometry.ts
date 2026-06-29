import { Vector2 } from "./Vector2";
import {
    dot
} from "./Vector2Math";

/**
 * Perpendicular vector.
 */
export function perpendicular(
    vector: Vector2
): Vector2 {

    return new Vector2(

        -vector.y,

        vector.x

    );

}

/**
 * Projection.
 */
export function project(
    vector: Vector2,
    onto: Vector2
): Vector2 {

    const denominator =
        onto.lengthSquared;

    if (denominator === 0) {

        return Vector2.ZERO.clone();

    }

    const factor =
        dot(
            vector,
            onto
        ) / denominator;

    return new Vector2(

        onto.x * factor,

        onto.y * factor

    );

}

/**
 * Reflection.
 */
export function reflect(
    vector: Vector2,
    normal: Vector2
): Vector2 {

    const n =
        normal
            .clone()
            .normalize();

    const factor =
        2 *
        dot(
            vector,
            n
        );

    return new Vector2(

        vector.x -
        factor * n.x,

        vector.y -
        factor * n.y

    );

}