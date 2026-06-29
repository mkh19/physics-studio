import { Mouse } from "../../core";
import { Container } from "../../graphics";
import { SelectionManager } from "../SelectionManager";
import { Tool } from "./Tool";

export class SelectTool extends Tool {

    public constructor(

        private readonly selection: SelectionManager,

        private readonly scene: Container

    ) {

        super();

    }

    public override onMouseDown(
        mouse: Mouse
    ): void {
        console.log("Mouse Down");
        const objects =
            this.scene.getDescendants();
            console.log(objects.length);

        for (

    let i = objects.length - 1;

    i >= 0;

    i--

) {

    const object =
        objects[i];
        console.log(object.constructor.name);

    if (
        !object.isSelectable
    ) {

        continue;

    }

    if (

        object
            .getBounds()
            .contains(

                mouse.x,

                mouse.y

            )

    ) {

        console.log(
    object.constructor.name,
    object.isSelectable
);

        this.selection.select(
            object
        );

        return;

    }

}
        this.selection.clear();

    }

}