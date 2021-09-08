/**
 * @desc Configures the size and shape of "points" geometry primitives.
 *
 * * Located at {@link Scene#pointsMaterial}.
 * * Supports round and square points.
 * * Optional perspective point scaling.
 * * Globally configures "points" primitives for all {@link PerformanceModel}s.
 *
 * ## Usage
 *
 * In the example below, we'll customize the {@link Scene}'s global ````PointsMaterial````, then use
 * an {@link XKTLoaderPlugin} to load a model containing a point cloud.
 *
 * [[Run this example](http://xeokit.github.io/xeokit-sdk/examples/#materials_PointsMaterial)]
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
 * viewer.scene.pointsMaterial.pointSize = 2;
 * viewer.scene.pointsMaterial.roundPoints = true;
 * viewer.scene.pointsMaterial.perspectivePoints = true;
 * viewer.scene.pointsMaterial.minPerspectivePointSize = 1;
 * viewer.scene.pointsMaterial.maxPerspectivePointSize = 6;
 * viewer.scene.pointsMaterial.filterIntensity = true;
 * viewer.scene.pointsMaterial.minIntensity = 0.0;
 * viewer.scene.pointsMaterial.maxIntensity = 1.0;
 *
 * const xktLoader = new XKTLoaderPlugin(viewer);
 *
 * const model = xktLoader.load({
 *      id: "myModel",
 *      src: "../assets/models/xkt/MAP-PointCloud.xkt"
 * });
 * ````
 */
export class PointsMaterial extends Material {
    /**
     * @constructor
     * @param {Component} owner Owner component. When destroyed, the owner will destroy this component as well.
     * @param {*} [cfg] The PointsMaterial configuration
     * @param {String} [cfg.id] Optional ID, unique among all components in the parent {@link Scene}, generated automatically when omitted.
     * @param {Number} [cfg.pointSize=2] Point size in pixels.
     * @param {Boolean} [cfg.roundPoints=true] Whether points are round (````true````) or square (````false````).
     * @param {Boolean} [cfg.perspectivePoints=true] Whether apparent point size reduces with distance when {@link Camera#projection} is set to "perspective".
     * @param {Number} [cfg.minPerspectivePointSize=1] When ````perspectivePoints```` is ````true````, this is the minimum rendered size of each point in pixels.
     * @param {Number} [cfg.maxPerspectivePointSize=6] When ````perspectivePoints```` is ````true````, this is the maximum rendered size of each point in pixels.
     * @param {Boolean} [cfg.filterIntensity=false] When this is true, points are only rendered when their intensity value falls within the range given in {@link }
     * @param {Number} [cfg.minIntensity=0] When ````filterIntensity```` is ````true````, points with intensity below this value will not be rendered.
     * @param {Number} [cfg.maxIntensity=1] When ````filterIntensity```` is ````true````, points with intensity above this value will not be rendered.
     * @param {String} [cfg.preset] Selects a preset PointsMaterial configuration - see {@link PointsMaterial#presets}.
     */
    constructor(owner: any, cfg?: any);
    /**
     * Gets available PointsMaterial presets.
     *
     * @type {Object}
     */
    get presets(): any;
    _state: RenderState;
    /**
     * Selects a preset ````PointsMaterial```` configuration.
     *
     * Default value is ````"default"````.
     *
     * @type {String}
     */
    set preset(arg: string);
    /**
     * The current preset ````PointsMaterial```` configuration.
     *
     * Default value is ````"default"````.
     *
     * @type {String}
     */
    get preset(): string;
    /**
     * Sets point size.
     *
     * Default value is ````2.0```` pixels.
     *
     * @type {Number}
     */
    set pointSize(arg: number);
    /**
     * Gets point size.
     *
     * Default value is ````2.0```` pixels.
     *
     * @type {Number}
     */
    get pointSize(): number;
    /**
     * Sets if points are round or square.
     *
     * Default is ````true```` to set points round.
     *
     * @type {Boolean}
     */
    set roundPoints(arg: boolean);
    /**
     * Gets if points are round or square.
     *
     * Default is ````true```` to set points round.
     *
     * @type {Boolean}
     */
    get roundPoints(): boolean;
    /**
     * Sets if rendered point size reduces with distance when {@link Camera#projection} is set to ````"perspective"````.
     *
     * Default is ````true````.
     *
     * @type {Boolean}
     */
    set perspectivePoints(arg: boolean);
    /**
     * Gets if rendered point size reduces with distance when {@link Camera#projection} is set to "perspective".
     *
     * Default is ````false````.
     *
     * @type {Boolean}
     */
    get perspectivePoints(): boolean;
    /**
     * Sets the minimum rendered size of points when {@link PointsMaterial#perspectivePoints} is ````true````.
     *
     * Default value is ````1.0```` pixels.
     *
     * @type {Number}
     */
    set minPerspectivePointSize(arg: number);
    /**
     * Gets the minimum rendered size of points when {@link PointsMaterial#perspectivePoints} is ````true````.
     *
     * Default value is ````1.0```` pixels.
     *
     * @type {Number}
     */
    get minPerspectivePointSize(): number;
    /**
     * Sets the maximum rendered size of points when {@link PointsMaterial#perspectivePoints} is ````true````.
     *
     * Default value is ````6```` pixels.
     *
     * @type {Number}
     */
    set maxPerspectivePointSize(arg: number);
    /**
     * Gets the maximum rendered size of points when {@link PointsMaterial#perspectivePoints} is ````true````.
     *
     * Default value is ````6```` pixels.
     *
     * @type {Number}
     */
    get maxPerspectivePointSize(): number;
    _preset: string;
    /**
     * Sets if rendered point size reduces with distance when {@link Camera#projection} is set to ````"perspective"````.
     *
     * Default is ````false````.
     *
     * @type {Boolean}
     */
    set filterIntensity(arg: boolean);
    /**
     * Gets if rendered point size reduces with distance when {@link Camera#projection} is set to "perspective".
     *
     * Default is ````false````.
     *
     * @type {Boolean}
     */
    get filterIntensity(): boolean;
    /**
     * Sets the minimum rendered size of points when {@link PointsMaterial#perspectivePoints} is ````true````.
     *
     * Default value is ````0````.
     *
     * @type {Number}
     */
    set minIntensity(arg: number);
    /**
     * Gets the minimum rendered size of points when {@link PointsMaterial#filterIntensity} is ````true````.
     *
     * Default value is ````0````.
     *
     * @type {Number}
     */
    get minIntensity(): number;
    /**
     * Sets the maximum rendered size of points when {@link PointsMaterial#filterIntensity} is ````true````.
     *
     * Default value is ````1````.
     *
     * @type {Number}
     */
    set maxIntensity(arg: number);
    /**
     * Gets the maximum rendered size of points when {@link PointsMaterial#filterIntensity} is ````true````.
     *
     * Default value is ````1````.
     *
     * @type {Number}
     */
    get maxIntensity(): number;
    /**
     * @private
     * @return {string}
     */
    private get hash();
}
import { Material } from "./Material.js";
import { RenderState } from "../webgl/RenderState.js";
