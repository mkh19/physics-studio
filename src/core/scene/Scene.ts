import { EventBus } from "../events/EventBus";
import { Container } from "../../graphics";
import { CanvasRenderer } from "../../renderer";
import { PhysicsBuilder } from "../../authoring";
/**
 * Base scene.
 */
export abstract class Scene
    extends Container {

    public readonly physics =
        new PhysicsBuilder(this);

    /**
     * Scene name.
     */
    public readonly name: string;

    /**
     * Scene events.
     */
    protected readonly events =
        new EventBus<Record<string, unknown>>();

    protected constructor(
        name: string
    ) {

        super();

        this.name = name;

    }

    /**
     * Called once.
     */
    public onCreate(): void {}

    /**
     * Called before destruction.
     */
    public onDestroy(): void {}

    /**
     * Called every frame.
     */
    public onUpdate(
        deltaTime: number
    ): void {}

    /**
     * Called every render.
     */
    public onRender(): void {}

    public override draw(
        renderer: CanvasRenderer
    ): void {

        super.draw(renderer);

    }

}