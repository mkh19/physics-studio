import { Graphic } from "./Graphic";
import { CanvasRenderer } from "../renderer";

export class Label extends Graphic {

    public text = "";

    public color = "#000";

    public font = "20px Arial";

    public align: CanvasTextAlign = "left";

    public draw(
        renderer: CanvasRenderer
    ): void {

        const ctx = renderer.context;

        ctx.font = this.font;

        ctx.fillStyle = this.color;

        ctx.textAlign = this.align;

        ctx.fillText(

            this.text,

            this.x,

            this.y

        );

    }

}