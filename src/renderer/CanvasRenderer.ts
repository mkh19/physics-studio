import { Scene } from "../core";
import { Renderer } from "./Renderer";
import { Camera2D } from "../core";

export class CanvasRenderer extends Renderer {


    private readonly camera =
    new Camera2D();

    public constructor(
        width = 1280,
        height = 720
    ) {

        const canvas =
            document.createElement("canvas");

        canvas.width = width;
        canvas.height = height;

        const context =
            canvas.getContext("2d");

        if (!context) {

            throw new Error(
                "Unable to create Canvas 2D context."
            );

        }

        super(
            canvas,
            context
        );

    }


    public getCamera(): Camera2D {

    return this.camera;

}

    public get element(): HTMLCanvasElement {

        return this.canvas;

    }

    public clear(): void {

        this.context.clearRect(

            0,

            0,

            this.canvas.width,

            this.canvas.height

        );
        this.context.setTransform(
            1,
            0,
            0,
            1,
            0,
            0
        );
        
        this.context.translate(
        
            -this.camera.x,
        
            -this.camera.y
        
        );
        
        this.context.scale(
        
            this.camera.zoom,
        
            this.camera.zoom
        
        );

    }

    public render(
        scene: Scene
    ): void {
    
        this.clear();
    
        scene.draw(this);
    
    }

}