import { Time } from "../time";
import { SceneManager } from "../scene";
import { EventBus } from "../events";

import { EngineEvents } from "./EngineEvents";
import { EngineOptions } from "./EngineOptions";
import { EngineState } from "./EngineState";

/**
 * Physics Studio Engine.
 */
export class Engine {

    /**
     * Event system.
     */
    public readonly events =
        new EventBus<EngineEvents>();

    /**
     * Time manager.
     */
    public readonly time =
        new Time();

    /**
     * Scene manager.
     */
    public readonly scenes =
        new SceneManager();

    /**
     * Current engine state.
     */
    private state =
        EngineState.Stopped;

    private animationFrame = 0;

    private lastTime = 0;

    public constructor(
        options: EngineOptions = {}
    ) {

        if (
            options.targetFPS !== undefined
        ) {

            this.time.targetFPS =
                options.targetFPS;

        }

    }


    
    /**
     * Starts engine.
     */
    public start(): void {

        if (
            this.state ===
            EngineState.Running
        ) {

            return;

        }

        this.state =
            EngineState.Running;

        this.time.start();

        this.events.emit(
            "start",
            undefined
        );

        this.loop();

    }

    /**
     * Stops engine.
     */
    public stop(): void {

        if (
            this.state ===
            EngineState.Stopped
        ) {

            return;

        }

        cancelAnimationFrame(
            this.animationFrame
        );

        this.state =
            EngineState.Stopped;

        this.time.stop();

        this.events.emit(
            "stop",
            undefined
        );

    }

    /**
     * Pauses engine.
     */
    public pause(): void {

        if (
            this.state !==
            EngineState.Running
        ) {

            return;

        }

        this.state =
            EngineState.Paused;

        this.time.pause();

        this.events.emit(
            "pause",
            undefined
        );

    }

    /**
     * Resumes engine.
     */
    public resume(): void {

        if (
            this.state !==
            EngineState.Paused
        ) {

            return;

        }

        this.state =
            EngineState.Running;

        this.time.resume();

        this.events.emit(
            "resume",
            undefined
        );

        this.loop();

    }

    /**
     * Main engine loop.
     */
    private loop = (): void => {

        if (
            this.state !==
            EngineState.Running
        ) {

            return;

        }

        this.time.update();

        const deltaTime =
            this.time.deltaTime;

        this.events.emit(
            "update",
            deltaTime
        );

        this.scenes.update(
            deltaTime
        );

        this.scenes.render();

        this.events.emit(
            "render",
            deltaTime
        );

        this.animationFrame =
            requestAnimationFrame(
                this.loop
            );

    };

    /**
     * Current engine state.
     */
    public get currentState(): EngineState {

        return this.state;

    }

    /**
     * Returns true if engine is running.
     */
    public get running(): boolean {
    
        return (
            this.state ===
            EngineState.Running
        );
    
    }

}