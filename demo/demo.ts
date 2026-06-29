import { CanvasRenderer } from "../src/renderer";
import { InclinedPlaneScene } from "../src/scenes";

const renderer = new CanvasRenderer(
    1000,
    700
);

document.body.style.margin = "0";

document.body.appendChild(
    renderer.element
);

const scene =
    new InclinedPlaneScene();

function loop(): void {

    renderer.render(scene);

    requestAnimationFrame(loop);

}

loop();