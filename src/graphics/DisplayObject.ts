import { CanvasRenderer } from "../renderer";
// import { Transform } from "../core";
import { EventBus } from "../core";
import { DisplayObjectEvents } from "./DisplayObjectEvents";
import { DisplayObjectState } from "./DisplayObjectState";
import { Rectangle } from "../math";

export abstract class DisplayObject {

    protected x = 0;
    protected selectable = true;

    protected y = 0;
    protected rotation = 0;

    protected visible = true;
    protected readonly state =
    new DisplayObjectState();
    
    protected readonly events =
    new EventBus<DisplayObjectEvents>();
    
    
    

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

    /**
     * Hit test.
     */
    public containsPoint(

        x: number,

        y: number

    ): boolean {

        return false;

    }



    public on<
        K extends keyof DisplayObjectEvents
    >(
        event: K,
        handler: (
            payload: DisplayObjectEvents[K]
        ) => void
    ): void {

        this.events.on(
            event,
            handler
        );

    }

    protected emit<
        K extends keyof DisplayObjectEvents
    >(
        event: K,
        payload: DisplayObjectEvents[K]
    ): void {

        this.events.emit(
            event,
            payload
        );

    }

    public get positionX(): number {

        return this.x;

    }
    public get isSelectable(): boolean {

        return this.selectable;
        
    }

    public get positionY(): number {

        return this.y;

    }

    public get angle(): number {

        return this.rotation;

    }

    public get hovered(): boolean {

        return this.state.hovered;

    }

    public get selected(): boolean {

        return this.state.selected;

    }

    public isVisible(): boolean {

        return this.visible;

    }

    public setSelected(
        value: boolean
    ): void {

        this.state.selected = value;

    }

    public setHovered(
        value: boolean
    ): void {

        this.state.hovered = value;

    }
    public abstract getBounds(): Rectangle;
    public abstract draw(
        renderer: CanvasRenderer
    ): void;

}