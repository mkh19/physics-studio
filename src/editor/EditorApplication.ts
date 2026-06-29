import { Editor } from "./Editor";
import { SelectionManager } from "./SelectionManager";

export class EditorApplication {

    public readonly selection =
        new SelectionManager();

    public readonly editor =
        new Editor();

}