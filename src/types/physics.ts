/**
 * Physics Studio
 * Physics related shared types.
 */

export enum BodyType {

    Static = "static",

    Dynamic = "dynamic",

    Kinematic = "kinematic"

}

export interface MassData {

    mass: number;

    inverseMass: number;

}

export interface PhysicsMaterial {

    density: number;

    friction: number;

    restitution: number;

}

export interface Force {

    x: number;

    y: number;

}

export interface PhysicsStep {

    deltaTime: number;

    iterations: number;

}