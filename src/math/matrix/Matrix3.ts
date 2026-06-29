// import { EPSILON } from "../constants";

/**
 * Represents a 3×3 matrix.
 *
 * Layout (row-major):
 *
 * | m11 m12 m13 |
 * | m21 m22 m23 |
 * | m31 m32 m33 |
 */
// export class Matrix3 {

//     /**
//      * Matrix elements.
//      */
//     protected readonly elements: Float64Array;

//     /**
//      * Creates identity matrix.
//      */
//     public constructor();

//     /**
//      * Creates matrix from values.
//      */
//     public constructor(
//         m11: number,
//         m12: number,
//         m13: number,
//         m21: number,
//         m22: number,
//         m23: number,
//         m31: number,
//         m32: number,
//         m33: number
//     );

//     public constructor(
//         m11 = 1,
//         m12 = 0,
//         m13 = 0,
//         m21 = 0,
//         m22 = 1,
//         m23 = 0,
//         m31 = 0,
//         m32 = 0,
//         m33 = 1
//     ) {

//         this.elements = new Float64Array(9);

//         this.elements[0] = m11;
//         this.elements[1] = m12;
//         this.elements[2] = m13;

//         this.elements[3] = m21;
//         this.elements[4] = m22;
//         this.elements[5] = m23;

//         this.elements[6] = m31;
//         this.elements[7] = m32;
//         this.elements[8] = m33;

//     }

//     /**
//      * Identity matrix.
//      */
//     public static identity(): Matrix3 {

//         return new Matrix3();

//     }

//     /**
//      * Zero matrix.
//      */
//     public static zero(): Matrix3 {

//         return new Matrix3(

//             0,0,0,

//             0,0,0,

//             0,0,0

//         );

//     }

//     /**
//      * Clone matrix.
//      */
//     public clone(): Matrix3 {

//         return new Matrix3(

//             this.elements[0],
//             this.elements[1],
//             this.elements[2],

//             this.elements[3],
//             this.elements[4],
//             this.elements[5],

//             this.elements[6],
//             this.elements[7],
//             this.elements[8]

//         );

//     }

//     /**
//      * Copy values.
//      */
//     public copy(
//         matrix: Matrix3
//     ): this {

//         this.elements.set(
//             matrix.elements
//         );

//         return this;

//     }

//     /**
//      * Sets identity.
//      */
//     public setIdentity(): this {

//         this.elements.fill(0);

//         this.elements[0] = 1;
//         this.elements[4] = 1;
//         this.elements[8] = 1;

//         return this;

//     }

//     /**
//      * Sets zero.
//      */
//     public setZero(): this {

//         this.elements.fill(0);

//         return this;

//     }

//     /**
//      * Returns the determinant.
//      */
//     public determinant(): number {

//         const m = this.elements;

//         return (

//             m[0] * (
//                 m[4] * m[8] -
//                 m[5] * m[7]
//             )

//             -

//             m[1] * (
//                 m[3] * m[8] -
//                 m[5] * m[6]
//             )

//             +

//             m[2] * (
//                 m[3] * m[7] -
//                 m[4] * m[6]
//             )

//         );

//     }

//     /**
//      * Transposes the matrix.
//      */
//     public transpose(): this {

//         let temp: number;

//         temp = this.elements[1];
//         this.elements[1] = this.elements[3];
//         this.elements[3] = temp;

//         temp = this.elements[2];
//         this.elements[2] = this.elements[6];
//         this.elements[6] = temp;

//         temp = this.elements[5];
//         this.elements[5] = this.elements[7];
//         this.elements[7] = temp;

//         return this;

//     }

//     /**
//      * Compares two matrices.
//      */
//     public equals(
//         matrix: Matrix3,
//         epsilon = EPSILON
//     ): boolean {

//         for (let i = 0; i < 9; i++) {

//             if (

//                 Math.abs(

//                     this.elements[i] -
//                     matrix.elements[i]

//                 ) > epsilon

//             ) {

//                 return false;

//             }

//         }

//         return true;

//     }

//     /**
//      * Multiplies every element by a scalar.
//      */
//     public multiplyScalar(
//         scalar: number
//     ): this {

//         for (let i = 0; i < 9; i++) {

//             this.elements[i] *= scalar;

//         }

//         return this;

//     }

//     /**
//      * Returns a copy of matrix elements.
//      */
//     public toArray(): Float64Array {

//         return new Float64Array(
//             this.elements
//         );

//     }

//     /**
//      * Multiplies this matrix by another matrix.
//      */
//     public multiplyMatrix(
//         matrix: Matrix3
//     ): this {

//         const a = this.elements;
//         const b = matrix.elements;

//         const result = new Float64Array(9);

//         for (let row = 0; row < 3; row++) {

//             for (let col = 0; col < 3; col++) {

//                 result[row * 3 + col] =

//                     a[row * 3 + 0] * b[col + 0] +

//                     a[row * 3 + 1] * b[col + 3] +

//                     a[row * 3 + 2] * b[col + 6];

//             }

//         }

//         this.elements.set(result);

//         return this;

//     }


//     /**
//      * Inverts the matrix.
//      *
//      * @throws Error if matrix is singular.
//      */
//     public invert(): this {

//         const m = this.elements;

//         const determinant = this.determinant();

//         if (Math.abs(determinant) <= EPSILON) {

//             throw new Error(
//                 "Matrix3 is not invertible."
//             );

//         }

//         const inverse = new Float64Array(9);

//         inverse[0] =  (m[4] * m[8] - m[5] * m[7]);
//         inverse[1] = -(m[1] * m[8] - m[2] * m[7]);
//         inverse[2] =  (m[1] * m[5] - m[2] * m[4]);

//         inverse[3] = -(m[3] * m[8] - m[5] * m[6]);
//         inverse[4] =  (m[0] * m[8] - m[2] * m[6]);
//         inverse[5] = -(m[0] * m[5] - m[2] * m[3]);

//         inverse[6] =  (m[3] * m[7] - m[4] * m[6]);
//         inverse[7] = -(m[0] * m[7] - m[1] * m[6]);
//         inverse[8] =  (m[0] * m[4] - m[1] * m[3]);

//         for (let i = 0; i < 9; i++) {

//             inverse[i] /= determinant;

//         }

//         this.elements.set(inverse);

//         return this;

//     }

//     /**
//      * Returns an inverted copy.
//      */
//     public inverted(): Matrix3 {

//         return this
//             .clone()
//             .invert();

//     }

// }



 export class Matrix3 {

     public elements = [

         1,0,0,
         0,1,0,

         0,0,1

     ];

    public clone(): Matrix3 {

        const m = new Matrix3();

        m.elements = [...this.elements];

        return m;

    }

    public identity(): this {

        this.elements = [

            1,0,0,

            0,1,0,

            0,0,1

        ];

        return this;

    }

}