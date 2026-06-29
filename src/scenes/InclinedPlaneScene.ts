import { Scene } from "../core";
import { Dimension } from "../education";
import { Grid } from "../graphics";
import { Axis } from "../graphics";
import {
    InclinedPlane,
    FreeBodyDiagram
} from "../physics-components";

export class InclinedPlaneScene
    extends Scene {
        
        private readonly plane = new InclinedPlane();
        private readonly body = new FreeBodyDiagram();

        public constructor() {
            
            
            
            super("Inclined Plane");
            
           this.physics.inclinedPlane({

    x: 120,

    y: 500,

    length: 350,

    angle: 30,

    mass: "5 kg",

    dimension: "5 m",

    normal: true,

    weight: true,

    appliedForce: true

});
    }

    public update(

        dt: number

    ): void {

        this.body.updateOnPlane(

            this.plane,

            dt

        );

    }

}