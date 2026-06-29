/**
 * Physics Studio
 * Event Bus
 */

export type EventHandler<T> = (
    payload: T
) => void;

export class EventBus<
    Events extends object
> {

    private readonly listeners =
        new Map<
            keyof Events,
            Set<EventHandler<Events[keyof Events]>>
        >();

    /**
     * Subscribe.
     */
    public on<K extends keyof Events>(
        event: K,
        handler: EventHandler<Events[K]>
    ): this {

        let handlers =
            this.listeners.get(event);

        if (!handlers) {

            handlers = new Set();

            this.listeners.set(
                event,
                handlers as Set<
                    EventHandler<
                        Events[keyof Events]
                    >
                >
            );

        }

        handlers.add(
            handler as EventHandler<
                Events[keyof Events]
            >
        );

        return this;

    }

    /**
     * Remove listener.
     */
    public off<K extends keyof Events>(
        event: K,
        handler: EventHandler<Events[K]>
    ): this {

        this.listeners
            .get(event)
            ?.delete(
                handler as EventHandler<
                    Events[keyof Events]
                >
            );

        return this;

    }

    /**
     * Emit event.
     */
    public emit<K extends keyof Events>(
        event: K,
        payload: Events[K]
    ): this {

        const handlers =
            this.listeners.get(event);

        if (!handlers) {
            return this;
        }

        for (const handler of handlers) {

            (
                handler as EventHandler<
                    Events[K]
                >
            )(payload);

        }

        return this;

    }

    /**
     * Subscribe once.
     */
    public once<K extends keyof Events>(
        event: K,
        handler: EventHandler<Events[K]>
    ): this {

        const wrapper: EventHandler<Events[K]> = (payload) => {

            this.off(
                event,
                wrapper
            );

            handler(payload);

        };

        return this.on(
            event,
            wrapper
        );

    }

    /**
     * Removes all listeners.
     */
    public clear(): this {

        this.listeners.clear();

        return this;

    }

    /**
     * Removes listeners of one event.
     */
    public clearEvent<K extends keyof Events>(
        event: K
    ): this {

        this.listeners.delete(event);

        return this;

    }

    /**
     * Returns number of listeners.
     */
    public listenerCount<K extends keyof Events>(
        event: K
    ): number {

        return (
            this.listeners
                .get(event)
                ?.size ?? 0
        );

    }

    /**
     * Checks if event has listeners.
     */
    public hasListeners<K extends keyof Events>(
        event: K
    ): boolean {

        return this.listenerCount(event) > 0;

    }

    /**
     * Returns registered event names.
     */
    public eventNames(): (keyof Events)[] {

        return Array.from(
            this.listeners.keys()
        );

    }

}