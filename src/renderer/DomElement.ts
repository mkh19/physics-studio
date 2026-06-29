export class DomElement {

    public readonly element: HTMLElement;

    public constructor(
        tag = "div"
    ) {

        this.element =
            document.createElement(tag);

    }

    public appendTo(
        parent: HTMLElement
    ): this {

        parent.appendChild(
            this.element
        );

        return this;

    }

    public remove(): this {

        this.element.remove();

        return this;

    }

    public setPosition(
        x: number,
        y: number
    ): this {

        this.element.style.left =
            `${x}px`;

        this.element.style.top =
            `${y}px`;

        return this;

    }

    public setSize(
        width: number,
        height: number
    ): this {

        this.element.style.width =
            `${width}px`;

        this.element.style.height =
            `${height}px`;

        return this;

    }

    public setClass(
        className: string
    ): this {

        this.element.className =
            className;

        return this;

    }

    public setStyle(
        name: string,
        value: string
    ): this {

        this.element.style.setProperty(
            name,
            value
        );

        return this;

    }

}