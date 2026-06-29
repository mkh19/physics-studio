import { Container, Arc, Label } from "../graphics";

export class AngleMarker extends Container {

    private readonly arc =
        new Arc();

    private readonly label =
        new Label();

    public constructor() {

        super();

        this.label.text = "θ";

        this.add(this.arc);

        this.add(this.label);

    }

    public setAngle(

        x: number,

        y: number,

        radius: number,

        start: number,

        end: number,

        text = "θ"

    ): this {

        this.arc.setPosition(
            x,
            y
        );

        this.arc.radius = radius;

        this.arc.startAngle = start;

        this.arc.endAngle = end;

        this.label.text = text;

        const mid =
            (start + end) * 0.5;

        this.label.setPosition(

            x +
            Math.cos(mid) *
            (radius + 18),

            y +
            Math.sin(mid) *
            (radius + 18)

        );

        return this;

    }

}