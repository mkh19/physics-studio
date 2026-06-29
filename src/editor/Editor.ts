import { Mouse } from "../core";
import { Tool } from "./tools/Tool";
import { Scene } from "../core";
import { SelectTool } from "./tools/SelectTool";
import { SelectionManager } from "./SelectionManager";
export class Editor {

    private scene?: Scene;
    private tool?: Tool;

    public setTool(
        tool: Tool
    ): void {

        this.tool = tool;

    }

    public setScene(
        scene: Scene
    ): void {

        this.scene = scene;

    }

    public mouseDown(
        mouse: Mouse
    ): void {

        this.tool?.onMouseDown(
            mouse
        );

    }

    public mouseMove(
        mouse: Mouse
    ): void {

        this.tool?.onMouseMove(
            mouse
        );

    }

    public mouseUp(
        mouse: Mouse
    ): void {

        this.tool?.onMouseUp(
            mouse
        );

    }

    public update(): void {

        this.tool?.update();

    }

    public useSelectTool(
        selection: SelectionManager
    ): void {

        if (!this.scene) {

            throw new Error(
                "Scene is not assigned."
            );

        }

        const scene = this.scene;

        this.setTool(

            new SelectTool(

                selection,

                scene

            )

        );

    }

    public get currentTool(): Tool | undefined {

        return this.tool;
        
    }

}