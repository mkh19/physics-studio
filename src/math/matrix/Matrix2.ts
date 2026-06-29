export class Matrix2 {

    constructor(

        public m11 = 1,
        public m12 = 0,

        public m21 = 0,
        public m22 = 1

    ) {}

    public clone(): Matrix2 {

        return new Matrix2(

            this.m11,
            this.m12,

            this.m21,
            this.m22

        );

    }

    public copy(
        other: Matrix2
    ): this {

        this.m11 = other.m11;
        this.m12 = other.m12;

        this.m21 = other.m21;
        this.m22 = other.m22;

        return this;

    }

    public identity(): this {

        this.m11 = 1;
        this.m12 = 0;

        this.m21 = 0;
        this.m22 = 1;

        return this;

    }

    public determinant(): number {

        return (

            this.m11 * this.m22 -

            this.m12 * this.m21

        );

    }

}