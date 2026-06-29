import { Graphic } from "./Graphic";
import { CanvasRenderer } from "../renderer";



export class Axis extends Graphic {

    public width = 2000;

    public height = 2000;

    public draw(
        renderer: CanvasRenderer
    ): void {

        const ctx =
            renderer.context;

        ctx.save();

        ctx.strokeStyle =
            "#9ca3af";

        ctx.lineWidth = 2;

        // محور X
        ctx.beginPath();

        ctx.moveTo(
            0,
            this.height / 2
        );

        ctx.lineTo(
            this.width,
            this.height / 2
        );

        ctx.stroke();

        // محور Y
        ctx.beginPath();

        ctx.moveTo(
            this.width / 2,
            0
        );

        ctx.lineTo(
            this.width / 2,
            this.height
        );

        ctx.stroke();

        ctx.restore();

    }

}