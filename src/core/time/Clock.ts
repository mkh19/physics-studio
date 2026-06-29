/**
 * High precision clock.
 */
export class Clock {

    private _running = false;

    private _startTime = 0;

    private _previousTime = 0;

    private _currentTime = 0;

    private _deltaTime = 0;

    private _elapsedTime = 0;

    private _frame = 0;

    /**
     * Starts the clock.
     */
    public start(): this {

        const now = performance.now();

        this._running = true;

        this._startTime = now;

        this._previousTime = now;

        this._currentTime = now;

        this._deltaTime = 0;

        this._elapsedTime = 0;

        return this;

    }

    /**
     * Stops the clock.
     */
    public stop(): this {

        this._running = false;

        return this;

    }

    /**
     * Resets the clock.
     */
    public reset(): this {

        this._running = false;

        this._startTime = 0;

        this._previousTime = 0;

        this._currentTime = 0;

        this._deltaTime = 0;

        this._elapsedTime = 0;

        return this;

    }

    /**
     * Updates timing values.
     */
    public tick(): number {

        if (!this._running) {

            return 0;

        }
        
        this._currentTime = performance.now();
        
        this._deltaTime =
        (this._currentTime - this._previousTime) / 1000;
        
        this._elapsedTime =
        (this._currentTime - this._startTime) / 1000;
        
        this._previousTime =
        this._currentTime;
        
        this._frame++;
        return this._deltaTime;

    }

    /**
     * Delta time in seconds.
     */
    public get deltaTime(): number {

        return this._deltaTime;

    }

    /**
     * Elapsed time in seconds.
     */
    public get elapsedTime(): number {

        return this._elapsedTime;

    }

    /**
     * Running state.
     */
    public get running(): boolean {

        return this._running;

    }

    public get frame(): number {

        return this._frame;

    }

}