import { Vector2 } from "../vector";
import { EPSILON } from "../constants";

/**
 * Returns true if three points are collinear.
 */
export function areCollinear(
    a: Vector2,
    b: Vector2,
    c: Vector2,
    epsilon = EPSILON
): boolean {

    const area =
        (b.x - a.x) * (c.y - a.y) -
        (b.y - a.y) * (c.x - a.x);

    return Math.abs(area) <= epsilon;

}

/**
 * Returns the segmentMidpoint.
 */
export function segmentMidpoint(
    a: Vector2,
    b: Vector2
): Vector2 {

    return new Vector2(
        (a.x + b.x) * 0.5,
        (a.y + b.y) * 0.5
    );

}

/**
 * Returns triangle signed area.
 */
export function triangleArea(
    a: Vector2,
    b: Vector2,
    c: Vector2
): number {

    return 0.5 * (

        (b.x - a.x) * (c.y - a.y)

        -

        (b.y - a.y) * (c.x - a.x)

    );

}




/**
 * Returns orientation of three points.
 *
 * > 0 : Counter Clockwise
 * < 0 : Clockwise
 * = 0 : Collinear
 */
export function orientation(
    a: Vector2,
    b: Vector2,
    c: Vector2
): number {

    return (

        (b.x - a.x) *

        (c.y - a.y)

        -

        (b.y - a.y) *

        (c.x - a.x)

    );

}

/**
 * Checks whether a point lies on a segment.
 */
export function pointOnSegment(
    point: Vector2,
    start: Vector2,
    end: Vector2,
    epsilon = EPSILON
): boolean {

    if (

        Math.abs(
            orientation(
                start,
                end,
                point
            )
        ) > epsilon

    ) {

        return false;

    }

    return (

        point.x >= Math.min(
            start.x,
            end.x
        ) - epsilon

        &&

        point.x <= Math.max(
            start.x,
            end.x
        ) + epsilon

        &&

        point.y >= Math.min(
            start.y,
            end.y
        ) - epsilon

        &&

        point.y <= Math.max(
            start.y,
            end.y
        ) + epsilon

    );

}