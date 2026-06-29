export class Vector2 {

    public static readonly ZERO = new Vector2(0, 0);
    public static readonly ONE = new Vector2(1, 1);
    public static readonly UP = new Vector2(0, 1);
    public static readonly DOWN = new Vector2(0, -1);
    public static readonly LEFT = new Vector2(-1, 0);
    public static readonly RIGHT = new Vector2(1, 0);

    constructor(
        public x = 0,
        public y = 0
    ) {}

    public clone(): Vector2 {

        return new Vector2(
            this.x,
            this.y
        );

    }

    public copy(
        other: Vector2
    ): this {

        this.x = other.x;
        this.y = other.y;

        return this;

    }

    public set(
        x: number,
        y: number
    ): this {

        this.x = x;
        this.y = y;

        return this;

    }

    public zero(): this {

        this.x = 0;
        this.y = 0;

        return this;

    }

    public equals(
        other: Vector2,
        epsilon = 1e-10
    ): boolean {

        return (
            Math.abs(this.x - other.x) <= epsilon &&
            Math.abs(this.y - other.y) <= epsilon
        );

    }

    public isZero(
        epsilon = 1e-10
    ): boolean {

        return (
            Math.abs(this.x) <= epsilon &&
            Math.abs(this.y) <= epsilon
        );

    }

    public add(
        other: Vector2
    ): this {

        this.x += other.x;
        this.y += other.y;

        return this;

    }

    public subtract(
        other: Vector2
    ): this {

        this.x -= other.x;
        this.y -= other.y;

        return this;

    }

    public multiplyScalar(
        scalar: number
    ): this {

        this.x *= scalar;
        this.y *= scalar;

        return this;

    }

    public divideScalar(
        scalar: number
    ): this {

        if (scalar !== 0) {

            this.x /= scalar;
            this.y /= scalar;

        }

        return this;

    }

    public negate(): this {

        this.x = -this.x;
        this.y = -this.y;

        return this;

    }

    public normalize(): this {

        const len = this.length;

        if (len > 0) {

            this.x /= len;
            this.y /= len;

        }

        return this;

    }

    public normalized(): Vector2 {

        return this.clone().normalize();

    }

    public distanceTo(
        other: Vector2
    ): number {

        return Math.sqrt(
            this.distanceSquaredTo(other)
        );

    }

    public distanceSquaredTo(
        other: Vector2
    ): number {

        const dx = this.x - other.x;
        const dy = this.y - other.y;

        return dx * dx + dy * dy;

    }

    public dot(
        other: Vector2
    ): number {

        return (
            this.x * other.x +
            this.y * other.y
        );

    }

    public cross(
        other: Vector2
    ): number {

        return (
            this.x * other.y -
            this.y * other.x
        );

    }

    public get lengthSquared(): number {

        return (
            this.x * this.x +
            this.y * this.y
        );

    }

    public get length(): number {

        return Math.sqrt(
            this.lengthSquared
        );

    }

    public toArray(): [number, number] {

        return [
            this.x,
            this.y
        ];

    }

    public toObject(): {
        x: number;
        y: number;
    } {

        return {
            x: this.x,
            y: this.y
        };

    }

    public toString(): string {

        return `Vector2(${this.x}, ${this.y})`;

    }

}