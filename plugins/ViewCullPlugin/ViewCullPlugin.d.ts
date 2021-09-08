/**
 * {@link Viewer} plugin that performs view frustum culling to accelerate rendering performance.
 *
 * For each {@link Entity} that represents an object, ````ViewCullPlugin```` will automatically
 * set {@link Entity#culled}````false```` whenever it falls outside our field of view.
 *
 * When culled, an ````Entity```` is not processed by xeokit's renderer.
 *
 * Internally, ````ViewCullPlugin```` organizes {@link Entity}s in
 * a [bounding volume hierarchy](https://en.wikipedia.org/wiki/Bounding_volume_hierarchy), implemented as
 * a [kd-tree](https://en.wikipedia.org/wiki/K-d_tree).
 *
 * On each {@link Scene} "tick" event, ````ViewCullPlugin```` searches the kd-tree using a frustum generated from
 * the {@link Camera}, marking each ````Entity```` **culled** if it falls outside the frustum.
 *
 * Use ````ViewCullPlugin```` by simply adding it to your ````Viewer````:
 *
 * ````javascript
 * const viewer = new Viewer({
 *    canvasId: "myCanvas",
 *    transparent: true
 * });
 *
 * const viewCullPlugin = new ViewCullPlugin(viewer, {
 *    maxTreeDepth: 20
 * });
 *
 * const xktLoader = new XKTLoaderPlugin(viewer);
 *
 * const model = xktLoader.load({
 *      id: "myModel",
 *      src: "./models/xkt/OTCConferenceCenter.xkt"
 * });
 * ````
 */
export class ViewCullPlugin extends Plugin {
    /**
     * @constructor
     * @param {Viewer} viewer The Viewer.
     * @param {Object} cfg  Plugin configuration.
     * @param {String} [cfg.id="ViewCull"] Optional ID for this plugin, so that we can find it within {@link Viewer#plugins}.
     * @param {Number} [cfg.maxTreeDepth=8] Maximum depth of the kd-tree.
     */
    constructor(viewer: any, cfg?: {
        id?: string;
        maxTreeDepth?: number;
    });
    _objectCullStates: any;
    _maxTreeDepth: number;
    _modelInfos: {};
    _frustum: Frustum;
    _kdRoot: {
        aabb: any;
        intersection: number;
    };
    _frustumDirty: boolean;
    _kdTreeDirty: boolean;
    _onViewMatrix: any;
    _onProjMatrix: any;
    _onModelLoaded: any;
    _onSceneTick: any;
    /**
     * Sets whether view culling is enabled.
     *
     * @param {Boolean} enabled Whether to enable view culling.
     */
    set enabled(arg: boolean);
    /**
     * Gets whether view culling is enabled.
     *
     * @retutns {Boolean} Whether view culling is enabled.
     */
    get enabled(): boolean;
    _enabled: boolean;
    _addModel(model: any): void;
    _removeModel(model: any): void;
    _doCull(): void;
    _buildFrustum(): void;
    _buildKDTree(): void;
    _insertEntityIntoKDTree(kdNode: any, entity: any, objectIdx: any, depth: any): void;
    _visitKDNode(kdNode: any, intersects?: number): void;
    _clear(): void;
}
import { Plugin } from "../../viewer/Plugin.js";
import { Frustum } from "../../viewer/scene/math/Frustum.js";
