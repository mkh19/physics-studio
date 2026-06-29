import { Vector2 } from "./Vector2";

/**
 * Rotates a vector around the origin.
 */
export function rotate(
    vector: Vector2,
    angle: number
): Vector2 {

    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    return new Vector2(

        vector.x * cos -
        vector.y * sin,

        vector.x * sin +
        vector.y * cos

    );

}

/**
 * Rotates a vector around a point.
 */
export function rotateAround(
    vector: Vector2,
    center: Vector2,
    angle: number
): Vector2 {

    const x =
        vector.x - center.x;

    const y =
        vector.y - center.y;

    const cos =
        Math.cos(angle);

    const sin =
        Math.sin(angle);

    return new Vector2(

        x * cos -
        y * sin +
        center.x,

        x * sin +
        y * cos +
        center.y

    );

}

/**
 * Scales a vector.
 */
export function scale(
    vector: Vector2,
    x: number,
    y: number = x
): Vector2 {

    return new Vector2(

        vector.x * x,

        vector.y * y

    );

}

/**
 * Translates a vector.
 */
export function translate(
    vector: Vector2,
    offset: Vector2
): Vector2 {

    return new Vector2(

        vector.x + offset.x,

        vector.y + offset.y

    );

}