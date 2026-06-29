export class Keyboard {

    private readonly keys =
        new Set<string>();

    public press(
        key: string
    ): void {

        this.keys.add(
            key
        );

    }

    public release(
        key: string
    ): void {

        this.keys.delete(
            key
        );

    }

    public isPressed(
        key: string
    ): boolean {

        return this.keys.has(
            key
        );

    }

}