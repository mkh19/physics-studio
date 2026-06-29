/**
 * Represents a semantic version.
 */
export class Version {

    public readonly major: number;

    public readonly minor: number;

    public readonly patch: number;

    public constructor(
        major = 1,
        minor = 0,
        patch = 0
    ) {

        this.major = major;
        this.minor = minor;
        this.patch = patch;

    }

    public toString(): string {

        return `${this.major}.${this.minor}.${this.patch}`;

    }

}