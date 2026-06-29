import { Graphic } from "./Graphic";
import { CanvasRenderer } from "../renderer";
import { Rectangle } from "../math";

export class Arrow extends Graphic {

    public x2 = 100;
    public y2 = 0;

    public color = "#1976d2";
    public width = 2;

    public headLength = 12;

    public draw(
        renderer: CanvasRenderer
    ): void {

        const ctx = renderer.context;

        const angle = Math.atan2(
            this.y2 - this.y,
            this.x2 - this.x
        );

        ctx.beginPath();

        ctx.moveTo(
            this.x,
            this.y
        );

        ctx.lineTo(
            this.x2,
            this.y2
        );

        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.width;
        ctx.stroke();

        ctx.beginPath();

        ctx.moveTo(
            this.x2,
            this.y2
        );

        ctx.lineTo(
            this.x2 -
            this.headLength *
            Math.cos(angle - Math.PI / 6),

            this.y2 -
            this.headLength *
            Math.sin(angle - Math.PI / 6)
        );

        ctx.lineTo(
            this.x2 -
            this.headLength *
            Math.cos(angle + Math.PI / 6),

            this.y2 -
            this.headLength *
            Math.sin(angle + Math.PI / 6)
        );

        ctx.closePath();

        ctx.fillStyle = this.color;

        ctx.fill();

    }

    public override getBounds(): Rectangle {

        const minX = Math.min(
            this.positionX,
            this.x2
        );
    
        const minY = Math.min(
            this.positionY,
            this.y2
        );
    
        const maxX = Math.max(
            this.positionX,
            this.x2
        );
    
        const maxY = Math.max(
            this.positionY,
            this.y2
        );
    
        return new Rectangle(
        
            minX,
        
            minY,
        
            maxX - minX,
        
            maxY - minY
        
        );
    
    }

}