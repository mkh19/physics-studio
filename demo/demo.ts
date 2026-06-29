import { Engine } from "../src/core";
import { CanvasRenderer } from "../src/renderer";
import { InclinedPlaneScene } from "../src/scenes";
import { Editor } from "../src/editor";
import { SelectionManager } from "../src/editor";

const renderer =
    new CanvasRenderer(
        1000,
        700
    );

document.body.style.margin = "0";

document.body.appendChild(
    renderer.element
);
renderer.element.addEventListener(

    "mousedown",

    () => {

        editor.mouseDown(

            renderer.getMouse()

        );

    }

);

const engine =
    new Engine();



engine.setRenderer(
    renderer
);

const scene =
    new InclinedPlaneScene();

engine.scenes.load(
    scene
);

const editor =
    new Editor();

const selection =
    new SelectionManager();

editor.setScene(
    scene
);

editor.useSelectTool(
    selection
);

engine.start();