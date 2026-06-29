import { DomElement } from "./DomElement";
import { DisplayObject } from "../graphics";

export class Layer {

    public readonly dom =
        new DomElement();

    public constructor() {

        this.dom
            .setClass(
                "ps-layer"
            );

        this.dom.setStyle(
            "position",
            "absolute"
        );

        this.dom.setStyle(
            "inset",
            "0"
        );

    }

    public add(
        object: DisplayObject
    ): this {
    
        this.dom.element.appendChild(
            object.element
        );
    
        object.render();
    
        return this;
    
    }

}