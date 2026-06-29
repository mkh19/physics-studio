import { Graphic } from "./Graphic";
import { CanvasRenderer } from "../renderer";

export class Arc extends Graphic {

    public radius = 40;

    public startAngle = 0;

    public endAngle = Math.PI / 2;

    public color = "#000";

    public lineWidth = 2;

    public draw(
        renderer: CanvasRenderer
    ): void {

        const ctx = renderer.context;

        ctx.beginPath();

        ctx.arc(

            this.x,

            this.y,

            this.radius,

            this.startAngle,

            this.endAngle

        );

        ctx.strokeStyle =
            this.color;

        ctx.lineWidth =
            this.lineWidth;

        ctx.stroke();

    }

}