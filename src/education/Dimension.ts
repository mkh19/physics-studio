import { Container, Line, Label } from "../graphics";

export class Dimension extends Container {

    private readonly line = new Line();

    private readonly label = new Label();

    public constructor() {

        super();

        this.label.align = "center";

        this.add(this.line);

        this.add(this.label);

    }

    public setDimension(

        x1: number,

        y1: number,

        x2: number,

        y2: number,

        text: string

    ): this {

        this.line.setPoints(

            x1,

            y1,

            x2,

            y2

        );

        this.label.text = text;

        this.label.setPosition(

            (x1 + x2) / 2,

            (y1 + y2) / 2 - 8

        );

        return this;

    }

}