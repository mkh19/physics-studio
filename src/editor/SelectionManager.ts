import { DisplayObject } from "../graphics";

export class SelectionManager {

    private selected?:
        DisplayObject;

    
    public select(
        object: DisplayObject
    ): void {

        if (
            this.selected === object
        ) {

            return;

        }

        if (
            this.selected
        ) {

            this.selected.setSelected(
                false
            );

        }

        this.selected =
            object;

        this.selected.setSelected(
            true
        );

    }




    public clear(): void {

        if (
            this.selected
        ) {

            this.selected.setSelected(
                false
            );

        }

        this.selected =
            undefined;

    }
    public get current():
        DisplayObject | undefined {

        return this.selected;

    }


    public isSelected(
        object: DisplayObject
    ): boolean {
    
        return (
            this.selected === object
        );
    
    }

}