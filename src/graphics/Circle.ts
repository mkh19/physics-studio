import { Graphic } from "./Graphic";
import { CanvasRenderer } from "../renderer";

export class Circle extends Graphic {

    public radius = 30;

    public color = "#2196f3";

    public draw(
        renderer: CanvasRenderer
    ): void {

        const ctx =
        this.beginDraw(
            renderer
        );
        
        
       

        ctx.beginPath();

        ctx.arc(

        0,

        0,

        this.radius,

        0,

        Math.PI * 2

    );
        ctx.fillStyle =
            this.color;

        ctx.fill();
        this.endDraw(
    ctx
);

    }

}