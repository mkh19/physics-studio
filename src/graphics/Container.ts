import { DisplayObject } from "./DisplayObject";
import { CanvasRenderer } from "../renderer";

export class Container
    extends DisplayObject {

    protected readonly children: DisplayObject[] = [];

    public add(
        child: DisplayObject
    ): this {

        this.children.push(child);

        return this;

    }

    public remove(
        child: DisplayObject
    ): this {

        const index =
            this.children.indexOf(child);

        if (index >= 0) {

            this.children.splice(
                index,
                1
            );

        }

        return this;

    }

    public draw(
        renderer: CanvasRenderer
    ): void {

        for (const child of this.children) {

            child.draw(renderer);

        }

    }

}