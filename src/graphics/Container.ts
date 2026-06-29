import { DisplayObject } from "./DisplayObject";
import { CanvasRenderer } from "../renderer";

import { Rectangle } from "../math";
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

    public override getBounds(): Rectangle {

        if (this.children.length === 0) {

            return new Rectangle();

        }

        let bounds =
            this.children[0].getBounds();

        let minX = bounds.x;
        let minY = bounds.y;

        let maxX = bounds.x + bounds.width;
        let maxY = bounds.y + bounds.height;

        for (

            let i = 1;

            i < this.children.length;

            i++

        ) {

            bounds =
                this.children[i].getBounds();

            minX = Math.min(
                minX,
                bounds.x
            );

            minY = Math.min(
                minY,
                bounds.y
            );

            maxX = Math.max(
                maxX,
                bounds.x + bounds.width
            );

            maxY = Math.max(
                maxY,
                bounds.y + bounds.height
            );

        }

        return new Rectangle(

            minX,

            minY,

            maxX - minX,

            maxY - minY

        );

    }



    public getDescendants(): readonly DisplayObject[] {

        const result: DisplayObject[] = [];
        
        for (const child of this.children) {
        
            result.push(child);
        
            if (child instanceof Container) {
            
                result.push(
                    ...child.getDescendants()
                );
            
            }
        
        }
    
        return result;
    
    }
}