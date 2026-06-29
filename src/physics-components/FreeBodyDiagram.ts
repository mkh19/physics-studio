import { Container } from "../graphics";
import { Mass } from "./Mass";
import { Force } from "./Force";

export class FreeBodyDiagram extends Container {

    private readonly mass = new Mass();
    private position = 0.45;
    private readonly friction =
    new Force();

    private velocity = 0;

    public constructor() {

        super();

        this.add(this.mass);
        this.add(this.friction);

    }

    public setMass(
        x: number,
        y: number,
        text: string
    ): this {

        this.mass.setMass(
            x,
            y,
            text
        );

        return this;

    }


    public updateOnPlane(

        plane: {

            pointAt(t: number): {

                x: number;

                y: number;

            };

        },

        dt: number

    ): void {

        this.velocity += 0.12 * dt;

        this.position += this.velocity * dt;

        if (this.position > 1) {

            this.position = 1;

            this.velocity = 0;

        }

        const p = plane.pointAt(

            this.position

        );

        this.moveTo(

            p.x,

            p.y,

            "5 kg"

        );

    }

    public addForce(
        angle: number,
        magnitude: number,
        label = "F"
    ): this {

        const force = new Force();

        force.setForce(
            this.massCenterX,
            this.massCenterY,
            angle,
            magnitude
        );

        force.setLabel(label);

        this.add(force);

        return this;

    }

    private massCenterX = 0;

    private massCenterY = 0;

    public moveTo(
        x: number,
        y: number,
        text: string
    ): this {

        this.massCenterX = x;
        this.massCenterY = y;

        this.mass.setMass(
            x,
            y,
            text
        );

        return this;

    }

    public setFriction(

        angle: number,
        
        magnitude: number
        
    ): this {
    
        this.friction
            .setForce(
            
                this.massCenterX,
            
                this.massCenterY,
            
                angle,
            
                magnitude
            
            )
            .setLabel("f");
        
        return this;
        
    }

}