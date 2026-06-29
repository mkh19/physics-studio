export class Mouse {

    public x = 0;

    public y = 0;

    public left = false;

    public middle = false;

    public right = false;

    public moveTo(
        x: number,
        y: number
    ): void {

        this.x = x;

        this.y = y;

    }

    public setButton(

        button: number,

        pressed: boolean

    ): void {

        switch (button) {

            case 0:

                this.left =
                    pressed;

                break;

            case 1:

                this.middle =
                    pressed;

                break;

            case 2:

                this.right =
                    pressed;

                break;

        }

    }

}