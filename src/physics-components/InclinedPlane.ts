import { Container, Line, Label } from "../graphics";

export class InclinedPlane extends Container {

    private readonly base = new Line();

    private readonly slope = new Line();

    private readonly angle = new Label();

    private startX = 0;
    private startY = 0;

    private endX = 0;
    private endY = 0;

    public constructor() {

        super();

        this.angle.text = "θ";

        this.add(this.base);

        this.add(this.slope);

        this.add(this.angle);

    }

    public build(
        x: number,
        y: number,
        length: number,
        angle: number
    ): this {

        const radians =
            angle *
            Math.PI /
            180;

        const endX = x + Math.cos(radians) * length;

        const endY = y - Math.sin(radians) * length;

        this.startX = x;
        this.startY = y;

        this.endX = endX;
        this.endY = endY;

        this.base.setPoints(

            x,

            y,

            x + length,

            y

        );

        this.slope.setPoints(

            x,

            y,

            endX,

            endY

        );

        this.angle.text =
            `${angle}°`;

        this.angle.setPosition(

            x + 25,

            y - 10

        );

        return this;

    }

    public pointAt(
        t: number
    ): { x: number; y: number } {
    
        return {
        
            x:
                this.startX +
                (this.endX - this.startX) * t,
        
            y:
                this.startY +
                (this.endY - this.startY) * t
        
        };
    
    }
}