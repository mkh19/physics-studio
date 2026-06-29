import { Vector2 } from "./Vector2";

const EPSILON = 1e-10;

/**
 * Dot product.
 */
export function dot(
    a: Vector2,
    b: Vector2
): number {

    return (
        a.x * b.x +
        a.y * b.y
    );

}

/**
 * Cross product.
 */
export function cross(
    a: Vector2,
    b: Vector2
): number {

    return (
        a.x * b.y -
        a.y * b.x
    );

}

/**
 * Distance squared.
 */
export function distanceSquared(
    a: Vector2,
    b: Vector2
): number {

    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return (
        dx * dx +
        dy * dy
    );

}

/**
 * Distance.
 */
export function distance(
    a: Vector2,
    b: Vector2
): number {

    return Math.sqrt(
        distanceSquared(a, b)
    );

}

/**
 * Angle of vector.
 */
export function angle(
    vector: Vector2
): number {

    return Math.atan2(
        vector.y,
        vector.x
    );

}

/**
 * Angle between vectors.
 */
export function angleBetween(
    a: Vector2,
    b: Vector2
): number {

    const denominator =
        a.length *
        b.length;

    if (denominator <= EPSILON) {
        return 0;
    }

    const cosine =
        dot(a, b) /
        denominator;

    return Math.acos(
        Math.max(
            -1,
            Math.min(
                1,
                cosine
            )
        )
    );

}