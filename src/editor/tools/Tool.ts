import { Mouse } from "../../core";

export abstract class Tool {

    public onMouseDown(
        mouse: Mouse
    ): void {}

    public onMouseMove(
        mouse: Mouse
    ): void {}

    public onMouseUp(
        mouse: Mouse
    ): void {}

    public update(): void {}

}