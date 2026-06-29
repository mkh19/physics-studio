import { Graphic } from "./Graphic";
import { CanvasRenderer } from "../renderer";
import { Rectangle } from "../math";
export class Grid extends Graphic {

    public width = 2000;

    public height = 2000;

    public spacing = 40;

    public color = "#e5e7eb";

    public draw(
        renderer: CanvasRenderer
    ): void {

        const ctx =
            renderer.context;

        ctx.save();

        ctx.strokeStyle =
            this.color;

        ctx.lineWidth = 1;

        for (
            let x = 0;
            x <= this.width;
            x += this.spacing
        ) {

            ctx.beginPath();

            ctx.moveTo(
                x,
                0
            );

            ctx.lineTo(
                x,
                this.height
            );

            ctx.stroke();

        }

        for (
            let y = 0;
            y <= this.height;
            y += this.spacing
        ) {

            ctx.beginPath();

            ctx.moveTo(
                0,
                y
            );

            ctx.lineTo(
                this.width,
                y
            );

            ctx.stroke();

        }

        ctx.restore();

    }

    public override getBounds(): Rectangle {

        return new Rectangle(
        
            this.positionX,
        
            this.positionY,
        
            this.width,
        
            this.height
        
        );
    
    }

}