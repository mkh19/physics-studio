import { Vector2 } from "./Vector2";

/**
 * Linear interpolation.
 */
export function lerp(
    a: Vector2,
    b: Vector2,
    t: number
): Vector2 {

    return new Vector2(

        a.x +
        (b.x - a.x) * t,

        a.y +
        (b.y - a.y) * t

    );

}

/**
 * Midpoint.
 */
export function midpoint(
    a: Vector2,
    b: Vector2
): Vector2 {

    return new Vector2(

        (a.x + b.x) * 0.5,

        (a.y + b.y) * 0.5

    );

}