/**
 * {@link Viewer} plugin that improves interactivity by disabling expensive rendering effects while the {@link Camera} is moving.
 *
 * # Usage
 *
 * In the example below, we'll create a {@link Viewer}, add a {@link FastNavPlugin}, then use an {@link XKTLoaderPlugin} to load a model.
 *
 * This viewer will only render the model with enhanced edges, physically-based rendering (PBR) and scalable
 * ambient obscurance (SAO) when the camera is not moving.
 *
 * Note how we enable SAO and PBR on the ````Scene```` and the model.
 *
 * * [[Run this example](https://xeokit.github.io/xeokit-sdk/examples/#performance_FastNavPlugin)]
 *
 * ````javascript
 * import {Viewer, XKTLoaderPlugin, FastNavPlugin} from "xeokit-sdk.es.js";
 *
 * const viewer = new Viewer({
 *      canvasId: "myCanvas",
 *      transparent: true,
 *      pbrEnabled: true,
 *      saoEnabled: true
 *  });
 *
 * viewer.scene.camera.eye = [-66.26, 105.84, -281.92];
 * viewer.scene.camera.look = [42.45, 49.62, -43.59];
 * viewer.scene.camera.up = [0.05, 0.95, 0.15];
 *
 * new FastNavPlugin(viewer, {
 *     pbrEnabled: true,
 *     saoEnabled: true,
 *     edgesEnabled: true
 * });
 *
 * const xktLoader = new XKTLoaderPlugin(viewer);
 *
 * const model = xktLoader.load({
 *      id: "myModel",
 *      src: "./models/xkt/HolterTower.xkt",
 *      edges: true,
 *      saoEnabled: true,
 *      pbrEnabled: true
 * });
 * ````
 *
 * @class FastNavPlugin
 */
export class FastNavPlugin extends Plugin {
    /**
     * @constructor
     * @param {Viewer} viewer The Viewer.
     * @param {Object} cfg FastNavPlugin configuration.
     * @param {String} [cfg.id="FastNav"] Optional ID for this plugin, so that we can find it within {@link Viewer#plugins}.
     * @param {Boolean} [cfg.pbrEnabled] Whether to enable physically-based rendering (PBR) when the camera stops moving. When not specified, PBR will be enabled if its currently enabled for the Viewer (see {@link Viewer#pbrEnabled}).
     * @param {Boolean} [cfg.saoEnabled] Whether to enable scalable ambient occlusion (SAO) when the camera stops moving. When not specified, SAO will be enabled if its currently enabled for the Viewer (see {@link Scene#pbrEnabled}).
     * @param {Boolean} [cfg.edgesEnabled] Whether to show enhanced edges when the camera stops moving. When not specified, edges will be enabled if they're currently enabled for the Viewer (see {@link EdgeMaterial#edges}).
     */
    constructor(viewer: any, cfg?: {
        id?: string;
        pbrEnabled?: boolean;
        saoEnabled?: boolean;
        edgesEnabled?: boolean;
    });
    _pbrEnabled: any;
    _saoEnabled: any;
    _edgesEnabled: any;
    _pInterval: any;
    _fadeMillisecs: number;
    _onCanvasBoundary: any;
    _onCameraMatrix: any;
    _onSceneTick: any;
    _pInterval2: number;
    _onSceneMouseDown: any;
    _onSceneMouseUp: any;
    _onSceneMouseMove: any;
    _startFade(): void;
    _initFade(): void;
    _img: HTMLImageElement;
    _cancelFade(): void;
    /**
     * Sets whether to enable physically-based rendering (PBR) when the camera stops moving.
     *
     * @return {Boolean} Whether PBR will be enabled.
     */
    set pbrEnabled(arg: boolean);
    /**
     * Gets whether to enable physically-based rendering (PBR) when the camera stops moving.
     *
     * @return {Boolean} Whether PBR will be enabled.
     */
    get pbrEnabled(): boolean;
    /**
     * Sets whether to enable scalable ambient occlusion (SAO) when the camera stops moving.
     *
     * @return {Boolean} Whether SAO will be enabled.
     */
    set saoEnabled(arg: boolean);
    /**
     * Gets whether the FastNavPlugin enables SAO when switching to quality rendering.
     *
     * @return {Boolean} Whether SAO will be enabled.
     */
    get saoEnabled(): boolean;
    /**
     * Sets whether to show enhanced edges when the camera stops moving.
     *
     * @return {Boolean} Whether edge enhancement will be enabled.
     */
    set edgesEnabled(arg: boolean);
    /**
     * Gets whether to show enhanced edges when the camera stops moving.
     *
     * @return {Boolean} Whether edge enhancement will be enabled.
     */
    get edgesEnabled(): boolean;
}
import { Plugin } from "../../viewer/Plugin.js";
