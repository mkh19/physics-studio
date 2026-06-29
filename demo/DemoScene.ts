import { Scene } from "../src/core";
import { Circle } from "../src/graphics";
import { Arrow } from "../src/graphics";
import { Label } from "../src/graphics";
import { FreeBodyDiagram } from "../src/physics-components";
import { InclinedPlane } from "../src/physics-components";

export class DemoScene extends Scene {

    public constructor() {

        super("Demo");


        const plane = new InclinedPlane();

        plane.build(
        
            120,
        
            500,
        
            320,
        
            180
        
        );
        
        this.add(plane);



        const body =
            new FreeBodyDiagram();

        body
            .moveTo(
                300,
                220,
                "5 kg"
            )
            .addForce(
                -Math.PI / 2,
                120,
                "N"
            )
            .addForce(
                Math.PI / 2,
                120,
                "mg"
            )
            .addForce(
                0,
                150,
                "F"
            );
        
        this.add(body);

        
        
        const circle = new Circle();
        circle
            .setPosition(
                200,
                150
            );

        this.add(circle);

        

    }

}