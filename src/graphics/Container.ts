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
    

    public override containsPoint(

        x: number,

        y: number

    ): boolean {

        for (

            let i =

            this.children.length - 1;

            i >= 0;

            i--

        ) {

            if (

                this.children[i]
                    .containsPoint(

                        x,

                        y

                    )

            ) {

                return true;

            }

        }

        return false;

    }

    public getChildren(): readonly DisplayObject[] {

        return this.children;

    }
}