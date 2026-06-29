import { Layer } from "./Layer";
import { Scene } from "../core/scene";
export class DomRenderer {
    public readonly root: HTMLElement;
    
    private readonly layers: Layer[] = [];
    
    private scene?: Scene;
    public constructor(
        container: HTMLElement
    ) {

        this.root = container;

        this.root.style.position =
            "relative";

        this.root.style.overflow =
            "hidden";

    }

    public addLayer(
        layer: Layer
    ): this {

        this.layers.push(layer);

        this.root.appendChild(
            layer.dom.element
        );

        return this;

    }

    public clear(): void {

        for (const layer of this.layers) {

            layer.dom.element.replaceChildren();

        }

    }

    public setScene(
        scene: Scene
    ): this {
    
        this.clear();
    
        for (const child of scene.getChildren()) {
        
            child.render();
        
            this.root.appendChild(
                child.element
            );
        
        }
    
        return this;
    
    }

}