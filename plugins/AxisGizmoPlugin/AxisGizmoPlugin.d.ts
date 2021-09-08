/**
 * {@link Viewer} plugin that shows the axii of the World-space coordinate system.
 *
 * ## Usage
 *
 * [[Run this example](https://xeokit.github.io/xeokit-sdk/examples/#gizmos_AxisGizmoPlugin)]
 *
 * ````JavaScript````
 * import {Viewer, XKTLoaderPlugin, AxisGizmoPlugin} from "xeokit-sdk.es.js";
 *
 * const viewer = new Viewer({
 *     canvasId: "myCanvas"
 * });
 *
 * viewer.camera.eye = [-2.56, 8.38, 8.27];
 * viewer.camera.look = [13.44, 3.31, -14.83];
 * viewer.camera.up = [0.10, 0.98, -0.14];
 *
 * const xktLoader = new XKTLoaderPlugin(viewer);
 *
 * new AxisGizmoPlugin(viewer, {
 *     canvasId: "myAxisGizmoCanvas"
 * });
 *
 * const model = xktLoader.load({
 *     id: "myModel",
 *     src: "../assets/models/xkt/Schependomlaan.xkt",
 *     edges: true
 * });
 * ````
 */
export class AxisGizmoPlugin extends Plugin {
    /**
     * @constructor
     * @param {Viewer} viewer The Viewer.
     * @param {Object} cfg  Plugin configuration.
     * @param {String} [cfg.id="AxisGizmo"] Optional ID for this plugin, so that we can find it within {@link Viewer#plugins}.
     * @param {String} [cfg.canvasId] ID of an existing HTML canvas to display the AxisGizmo - either this or canvasElement is mandatory. When both values are given, the element reference is always preferred to the ID.
     * @param {HTMLCanvasElement} [cfg.canvasElement] Reference of an existing HTML canvas to display the AxisGizmo - either this or canvasId is mandatory. When both values are given, the element reference is always preferred to the ID.
     */
    constructor(viewer: any, cfg: {
        id?: string;
        canvasId?: string;
        canvasElement?: HTMLCanvasElement;
    });
    _axisGizmoScene: any;
    _meshes: Mesh[];
    /** Shows or hides this AxisGizmoPlugin.
     *
     * @param visible
     */
    setVisible(visible: any): void;
    _axisGizmoCanvas: any;
}
import { Plugin } from "../../viewer/Plugin.js";
import { Mesh } from "../../viewer/scene/mesh/Mesh.js";
