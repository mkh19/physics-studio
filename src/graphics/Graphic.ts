// import { DomElement } from "../renderer";

// export abstract class Graphic {

//     protected readonly dom =
//         new DomElement();

//     protected x = 0;

//     protected y = 0;

//     public setPosition(
//         x: number,
//         y: number
//     ): this {

//         this.x = x;
//         this.y = y;

//         this.dom.setPosition(x, y);

//         return this;

//     }

//     public get element(): HTMLElement {

//         return this.dom.element;

//     }

//     public attachTo(
//         layer: HTMLElement
//     ): this {

//         layer.appendChild(
//             this.element
//         );

//         return this;

//     }

//     /**
//      * Creates the visual representation.
//      */
//     public abstract render(): void;

// }

import { DisplayObject } from "./DisplayObject";

export abstract class Graphic
    extends DisplayObject {
}