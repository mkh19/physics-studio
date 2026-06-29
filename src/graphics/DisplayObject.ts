import { CanvasRenderer } from "../renderer";

export abstract class DisplayObject {

    protected x = 0;

    protected y = 0;
    protected rotation = 0;

    protected visible = true;

    public setPosition(
        x: number,
        y: number
    ): this {

        this.x = x;
        this.y = y;

        return this;

    }

    public show(): this {

        this.visible = true;

        return this;

    }


    public setRotation(
        angle: number
    ): this {

        this.rotation = angle;

        return this;

    }

    public hide(): this {

        this.visible = false;

        return this;

    }


    protected beginDraw(
        renderer: CanvasRenderer
    ): CanvasRenderingContext2D {

        const ctx =
            renderer.context;

        ctx.save();

        ctx.translate(
            this.x,
            this.y
        );

        ctx.rotate(
            this.rotation
        );

        return ctx;

    }

    protected endDraw(
        ctx: CanvasRenderingContext2D
    ): void {
    
        ctx.restore();
    
    }

    public abstract draw(
        renderer: CanvasRenderer
    ): void;

}