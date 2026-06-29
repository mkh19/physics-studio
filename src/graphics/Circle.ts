import { Graphic } from "./Graphic";
import { CanvasRenderer } from "../renderer";
import { Rectangle } from "../math";
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

        if (this.selected) {

        ctx.save();

        ctx.strokeStyle = "#1d4ed8";

        ctx.lineWidth = 2;

        ctx.beginPath();

        ctx.arc(

    0,

    0,

    this.radius + 4,

    0,

    Math.PI * 2

);
        ctx.stroke();

        ctx.restore();

    }
        this.endDraw(
    ctx
);

    }

    public override containsPoint(

            x: number,

            y: number

        ): boolean {

            const dx =
                x - this.x;

            const dy =
                y - this.y;

            return (

                dx * dx +

                dy * dy

            ) <=

            this.radius *

            this.radius;

        }


        public override getBounds(): Rectangle {

        return new Rectangle(

            this.positionX - this.radius,

            this.positionY - this.radius,

            this.radius * 2,

            this.radius * 2

        );

    }
}