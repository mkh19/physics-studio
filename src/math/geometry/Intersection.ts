/**
 * Geometry intersection algorithms.
 */

import { Vector2 } from "../vector";
import { EPSILON } from "../constants";
import { orientation } from "./Geometry";

/**
 * Returns true if two line segments intersect.
 */
export function segmentIntersection(

    a1: Vector2,

    a2: Vector2,

    b1: Vector2,

    b2: Vector2,

    epsilon = EPSILON

): boolean {

    const o1 =
        orientation(
            a1,
            a2,
            b1
        );

    const o2 =
        orientation(
            a1,
            a2,
            b2
        );

    const o3 =
        orientation(
            b1,
            b2,
            a1
        );

    const o4 =
        orientation(
            b1,
            b2,
            a2
        );

    return (

        (o1 > epsilon && o2 < -epsilon ||

         o1 < -epsilon && o2 > epsilon)

        &&

        (o3 > epsilon && o4 < -epsilon ||

         o3 < -epsilon && o4 > epsilon)

    );

}