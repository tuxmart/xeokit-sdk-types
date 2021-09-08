/**
 * @desc Configures the shape of "lines" geometry primitives.
 *
 * * Located at {@link Scene#linesMaterial}.
 * * Globally configures "lines" primitives for all {@link PerformanceModel}s.
 *
 * ## Usage
 *
 * In the example below, we'll customize the {@link Scene}'s global ````LinesMaterial````, then use
 * an {@link XKTLoaderPlugin} to load a model containing line segments.
 *
 * [[Run this example](http://xeokit.github.io/xeokit-sdk/examples/#materials_LinesMaterial)]
 *
 * ````javascript
 * import {Viewer, XKTLoaderPlugin} from "xeokit-sdk.es.js";
 *
 * const viewer = new Viewer({
 *     canvasId: "myCanvas",
 *     transparent: true
 * });
 *
 * viewer.scene.camera.eye = [0, 0, 5];
 * viewer.scene.camera.look = [0, 0, 0];
 * viewer.scene.camera.up = [0, 1, 0];
 *
 * viewer.scene.linesMaterial.lineWidth = 3;
 *
 * const xktLoader = new XKTLoaderPlugin(viewer);
 *
 * const model = xktLoader.load({
 *      id: "myModel",
 *      src: "./models/xkt/Duplex.ifc.xkt"
 * });
 * ````
 */
export class LinesMaterial extends Material {
    /**
     * @constructor
     * @param {Component} owner Owner component. When destroyed, the owner will destroy this component as well.
     * @param {*} [cfg] The LinesMaterial configuration
     * @param {String} [cfg.id] Optional ID, unique among all components in the parent {@link Scene}, generated automatically when omitted.
     * @param {Number} [cfg.lineWidth=1] Line width in pixels.
     * @param {String} [cfg.preset] Selects a preset LinesMaterial configuration - see {@link LinesMaterial#presets}.
     */
    constructor(owner: any, cfg?: any);
    /**
     * Gets available LinesMaterial presets.
     *
     * @type {Object}
     */
    get presets(): any;
    _state: RenderState;
    /**
     * Selects a preset LinesMaterial configuration.
     *
     * Default value is ````"default"````.
     *
     * @type {String}
     */
    set preset(arg: string);
    /**
     * The current preset LinesMaterial configuration.
     *
     * Default value is ````"default"````.
     *
     * @type {String}
     */
    get preset(): string;
    /**
     * Sets line width.
     *
     * Default value is ````1```` pixels.
     *
     * @type {Number}
     */
    set lineWidth(arg: number);
    /**
     * Gets the line width.
     *
     * Default value is ````1```` pixels.
     *
     * @type {Number}
     */
    get lineWidth(): number;
    _preset: string;
    /**
     * @private
     * @return {string}
     */
    private get hash();
}
import { Material } from "./Material.js";
import { RenderState } from "../webgl/RenderState.js";
