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
            
           this.physics.inclinedPlane();
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