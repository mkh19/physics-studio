/**
 * Renderer shared types.
 */

export enum RenderBackend {

    DOM = "dom",

    SVG = "svg",

    Canvas = "canvas"

}

export interface RenderSize {

    width: number;

    height: number;

}

export interface RenderViewport {

    x: number;

    y: number;

    width: number;

    height: number;

    zoom: number;

}

export interface RenderOptions {

    antialias?: boolean;

    pixelRatio?: number;

}