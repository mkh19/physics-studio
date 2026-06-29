export class Camera2D {

    public x = 0;

    public y = 0;

    public zoom = 1;

    public moveTo(
        x: number,
        y: number
    ): this {

        this.x = x;
        this.y = y;

        return this;

    }

    public setZoom(
        zoom: number
    ): this {

        this.zoom = zoom;

        return this;

    }

}