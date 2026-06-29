import { Engine } from "./engine";
import { Scene } from "./scene";
import { StudioOptions } from "./config/StudioOptions";

/**
 * Main entry point of Physics Studio.
 */
export class PhysicsStudio {

    /**
     * Engine instance.
     */
    public readonly engine: Engine;

    public constructor(
        options: StudioOptions = {}
    ) {

        this.engine = new Engine(
            options.engine
        );

    }

    /**
     * Loads a scene.
     */
    public loadScene(
        scene: Scene
    ): this {

        this.engine.scenes.load(scene);

        return this;

    }

    /**
     * Starts the engine.
     */
    public start(): this {

        this.engine.start();

        return this;

    }

    /**
     * Stops the engine.
     */
    public stop(): this {

        this.engine.stop();

        return this;

    }

    /**
     * Pauses the engine.
     */
    public pause(): this {

        this.engine.pause();

        return this;

    }

    /**
     * Resumes the engine.
     */
    public resume(): this {

        this.engine.resume();

        return this;

    }

}