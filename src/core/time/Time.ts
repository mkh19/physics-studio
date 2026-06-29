import { Clock } from "./Clock";

/**
 * Controls engine timing.
 */
export class Time {

    private readonly clock: Clock;

    private _timeScale = 1;

    private _paused = false;

    private _targetFPS = 60;

    private _fixedDeltaTime = 1 / 60;

    private _maxDeltaTime = 0.1;

    public constructor() {

        this.clock = new Clock();

    }

    /**
     * Starts timing.
     */
    public start(): void {

        this.clock.start();

    }

    /**
     * Stops timing.
     */
    public stop(): void {

        this.clock.stop();

    }

    /**
     * Updates timing.
     */
    public update(): void {

        if (this._paused) {
            return;
        }

        this.clock.tick();

    }

    /**
     * Pause.
     */
    public pause(): void {

        this._paused = true;

    }

    /**
     * Resume.
     */
    public resume(): void {

        this._paused = false;

    }

    /**
     * Delta time.
     */
    public get deltaTime(): number {

        return Math.min(
            this.clock.deltaTime *
            this._timeScale,
            this._maxDeltaTime
        );

    }

    /**
     * Unscaled delta.
     */
    public get unscaledDeltaTime(): number {

        return this.clock.deltaTime;

    }

    /**
     * Elapsed time.
     */
    public get elapsedTime(): number {

        return this.clock.elapsedTime;

    }

    /**
     * Current frame.
     */
    public get frame(): number {

        return this.clock.frame;

    }

    /**
     * Pause state.
     */
    public get paused(): boolean {

        return this._paused;

    }

    /**
     * Time scale.
     */
    public get timeScale(): number {

        return this._timeScale;

    }

    public set timeScale(
        value: number
    ) {

        this._timeScale =
            Math.max(0, value);

    }

    /**
     * Fixed timestep.
     */
    public get fixedDeltaTime(): number {

        return this._fixedDeltaTime;

    }

    /**
     * Target FPS.
     */
    public get targetFPS(): number {

        return this._targetFPS;
        
    }
    
    public set targetFPS(
        value: number
    ) {
    
        if (value <= 0) {
            throw new Error(
                "Target FPS must be greater than zero."
            );
        }
    
        this._targetFPS = value;
    
        this._fixedDeltaTime =
            1 / value;
    
    }

}