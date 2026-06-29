import { Graphic } from "./Graphic";
import { CanvasRenderer } from "../renderer";
import { Rectangle } from "../math";
export class Line extends Graphic {

    public x2 = 100;

    public y2 = 0;

    public color = "#000";

    public width = 2;

    public draw(
        renderer: CanvasRenderer
    ): void {

        const ctx =
            renderer.context;

        ctx.beginPath();

        ctx.moveTo(
            this.x,
            this.y
        );

        ctx.lineTo(
            this.x2,
            this.y2
        );

        ctx.lineWidth =
            this.width;

        ctx.strokeStyle =
            this.color;

        ctx.stroke();

    }

    public setPoints(
        x1: number,
        y1: number,
        x2: number,
        y2: number
    ): this {
    
        this.setPosition(
            x1,
            y1
        );
    
        this.x2 = x2;
        this.y2 = y2;
    
        return this;
    
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