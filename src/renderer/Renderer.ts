import { Scene } from "../core";

export abstract class Renderer {

    protected constructor(
        protected readonly canvas: HTMLCanvasElement,
        public readonly context: CanvasRenderingContext2D
    ) {}

    public abstract clear(): void;

    public abstract render(
        scene: Scene
    ): void;

}