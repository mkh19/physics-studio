export class Rectangle {

    public constructor(

        public x = 0,

        public y = 0,

        public width = 0,

        public height = 0

    ) {}

    public contains(

        x: number,

        y: number

    ): boolean {

        return (

            x >= this.x &&

            x <= this.x + this.width &&

            y >= this.y &&

            y <= this.y + this.height

        );

    }

}