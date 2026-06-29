import { Circle, Label } from "../graphics";
import { Container } from "../graphics";
import { CanvasRenderer } from "../renderer";

export class Mass extends Container {

    private readonly body = new Circle();

    private readonly label = new Label();

    public constructor() {

        super();

        this.body.radius = 22;
        this.body.color = "#607d8b";

        this.label.text = "m";

        this.label.align = "center";

        this.add(this.body);

        this.add(this.label);

    }

    public setMass(

        x: number,

        y: number,

        text: string

    ): this {

        this.body.setPosition(
            x,
            y
        );

        this.label.text = text;

        this.label.setPosition(

            x,

            y + 6

        );

        return this;

    }

    public override draw(
        renderer: CanvasRenderer
    ): void {

        super.draw(renderer);

    }

}