import { Arrow, Label } from "../graphics";
import { Container } from "../graphics";
import { CanvasRenderer } from "../renderer";

export class Force extends Container {

    private readonly arrow = new Arrow();

    private readonly label = new Label();

    public constructor() {

        super();
        this.label.text = "";
        

        this.add(this.arrow);

        this.add(this.label);

    }
    public setForce(

    x: number,

    y: number,

    angle: number,

    magnitude: number,

    label = ""

    ): this {

        this.arrow.setPosition(
            x,
            y
        );

        this.arrow.x2 =
            x +
            Math.cos(angle) *
            magnitude;

        this.arrow.y2 =
            y +
            Math.sin(angle) *
            magnitude;

        this.label.setPosition(

            this.arrow.x2 + 8,

            this.arrow.y2 - 8

        );
        this.label.text = label;
        return this;

    }

    public override draw(
        renderer: CanvasRenderer
    ): void {

        super.draw(renderer);

    }


    public setLabel(
        text: string
    ): this {
    
        this.label.text = text;
    
        return this;
    
    }

}