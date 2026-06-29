import { Scene } from "./Scene";

/**
 * Manages scene lifecycle.
 */
export class SceneManager {

    private activeScene?: Scene;

    /**
     * Gets active scene.
     */
    public get current(): Scene | undefined {

        return this.activeScene;

    }

    /**
     * Loads a scene.
     */
    public load(
        scene: Scene
    ): void {

        if (this.activeScene) {

            this.activeScene.onDestroy();

        }

        this.activeScene = scene;

        this.activeScene.onCreate();

    }

    /**
     * Updates active scene.
     */
    public update(
        deltaTime: number
    ): void {

        this.activeScene?.onUpdate(
            deltaTime
        );

    }

    /**
     * Renders active scene.
     */
    public render(): void {

        if (!this.activeScene) {
            return;
        }
    
        this.activeScene.render();
    
    }

    /**
     * Removes active scene.
     */
    public unload(): void {

        this.activeScene?.onDestroy();

        this.activeScene = undefined;

    }

    /**
     * Returns true if a scene is loaded.
     */
    public hasScene(): boolean {

        return this.activeScene !== undefined;

    }

}