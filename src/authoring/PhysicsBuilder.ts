import { Scene } from "../core";
import { Grid , Axis} from "../graphics";
import { InclinedPlaneOptions } from "./options/InclinedPlaneOptions";
import {
    InclinedPlane,
    FreeBodyDiagram
} from "../physics-components";
import { Dimension } from "../education";

export class PhysicsBuilder {

    public constructor(

        private readonly scene: Scene

    ) {}

    public inclinedPlane(options: InclinedPlaneOptions): this {

    const grid = new Grid();
    this.scene.add(
        grid
    );

    const axis = new Axis();

    this.scene.add(
        axis
    );

    const plane =
        new InclinedPlane();

    plane.build(

        options.x,

        500,

        options.length,

        30

    );

    this.scene.add(
        plane
    );

    const p =
        plane.pointAt(
            0.45
        );

    const body =
        new FreeBodyDiagram();

    body
        .moveTo(

            p.x,

            p.y,

            "5 kg"

        )
        .addForce(
            -Math.PI / 2,
            120,
            "N"
        )
        .setFriction(

            Math.PI,

            90

        )
        .addForce(
            Math.PI / 2,
            120,
            "mg"
        )
        .addForce(
            0,
            120,
            "F"
        );

    this.scene.add(
        body
    );

    const length =
        new Dimension();

    length.setDimension(

        120,

        560,

        470,

        560,

        "5 m"

    );

    this.scene.add(
        length
    );

    return this;

}

}