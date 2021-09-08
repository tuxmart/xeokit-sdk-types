/**
 * Fired whenever a debug message is logged on a component within this Scene.
 * @event log
 * @param {String} value The debug message
 */
/**
 * Fired whenever an error is logged on a component within this Scene.
 * @event error
 * @param {String} value The error message
 */
/**
 * Fired whenever a warning is logged on a component within this Scene.
 * @event warn
 * @param {String} value The warning message
 */
/**
 * @desc Contains the components that comprise a 3D scene.
 *
 * * A {@link Viewer} has a single Scene, which it provides in {@link Viewer#scene}.
 * * Plugins like {@link AxisGizmoPlugin} also have their own private Scenes.
 * * Each Scene has a corresponding {@link MetaScene}, which the Viewer provides in {@link Viewer#metaScene}.
 *
 * ## Getting a Viewer's Scene
 *
 * ````javascript
 * var scene = viewer.scene;
 * ````
 *
 * ## Creating and accessing Scene components
 *
 * As a brief introduction to creating Scene components, we'll create a {@link Mesh} that has a
 * {@link buildTorusGeometry} and a {@link PhongMaterial}:
 *
 * ````javascript
 * var teapotMesh = new Mesh(scene, {
 *     id: "myMesh",                               // <<---------- ID automatically generated if not provided
 *     geometry: new TorusGeometry(scene),
 *     material: new PhongMaterial(scene, {
 *         id: "myMaterial",
 *         diffuse: [0.2, 0.2, 1.0]
 *     })
 * });
 *
 * teapotMesh.scene.camera.eye = [45, 45, 45];
 * ````
 *
 * Find components by ID in their Scene's {@link Scene#components} map:
 *
 * ````javascript
 * var teapotMesh = scene.components["myMesh"];
 * teapotMesh.visible = false;
 *
 * var teapotMaterial = scene.components["myMaterial"];
 * teapotMaterial.diffuse = [1,0,0]; // Change to red
 * ````
 *
 * A Scene also has a map of component instances for each {@link Component} subtype:
 *
 * ````javascript
 * var meshes = scene.types["Mesh"];
 * var teapotMesh = meshes["myMesh"];
 * teapotMesh.xrayed = true;
 *
 * var phongMaterials = scene.types["PhongMaterial"];
 * var teapotMaterial = phongMaterials["myMaterial"];
 * teapotMaterial.diffuse = [0,1,0]; // Change to green
 * ````
 *
 * See {@link Node}, {@link Node} and {@link Model} for how to create and access more sophisticated content.
 *
 * ## Controlling the camera
 *
 * Use the Scene's {@link Camera} to control the current viewpoint and projection:
 *
 * ````javascript
 * var camera = myScene.camera;
 *
 * camera.eye = [-10,0,0];
 * camera.look = [-10,0,0];
 * camera.up = [0,1,0];
 *
 * camera.projection = "perspective";
 * camera.perspective.fov = 45;
 * //...
 * ````
 *
 * ## Managing the canvas
 *
 * The Scene's {@link Canvas} component provides various conveniences relevant to the WebGL canvas, such
 * as firing resize events etc:
 *
 * ````javascript
 * var canvas = scene.canvas;
 *
 * canvas.on("boundary", function(boundary) {
 *     //...
 * });
 * ````
 *
 * ## Picking
 *
 * Use {@link Scene#pick} to pick and raycast entites.
 *
 * For example, to pick a point on the surface of the closest entity at the given canvas coordinates:
 *
 * ````javascript
 * var pickResult = scene.pick({
 *      pickSurface: true,
 *      canvasPos: [23, 131]
 * });
 *
 * if (pickResult) { // Picked an entity
 *
 *     var entity = pickResult.entity;
 *
 *     var primitive = pickResult.primitive; // Type of primitive that was picked, usually "triangles"
 *     var primIndex = pickResult.primIndex; // Position of triangle's first index in the picked Mesh's Geometry's indices array
 *     var indices = pickResult.indices; // UInt32Array containing the triangle's vertex indices
 *     var localPos = pickResult.localPos; // Float64Array containing the picked Local-space position on the triangle
 *     var worldPos = pickResult.worldPos; // Float64Array containing the picked World-space position on the triangle
 *     var viewPos = pickResult.viewPos; // Float64Array containing the picked View-space position on the triangle
 *     var bary = pickResult.bary; // Float64Array containing the picked barycentric position within the triangle
 *     var normal = pickResult.normal; // Float64Array containing the interpolated normal vector at the picked position on the triangle
 *     var uv = pickResult.uv; // Float64Array containing the interpolated UV coordinates at the picked position on the triangle
 * }
 * ````
 *
 * ## Pick masking
 *
 * We can use {@link Scene#pick}'s ````includeEntities```` and ````excludeEntities````  options to mask which {@link Mesh}es we attempt to pick.
 *
 * This is useful for picking through things, to pick only the Entities of interest.
 *
 * To pick only Entities ````"gearbox#77.0"```` and ````"gearbox#79.0"````, picking through any other Entities that are
 * in the way, as if they weren't there:
 *
 * ````javascript
 * var pickResult = scene.pick({
 *      canvasPos: [23, 131],
 *      includeEntities: ["gearbox#77.0", "gearbox#79.0"]
 * });
 *
 * if (pickResult) {
 *       // Entity will always be either "gearbox#77.0" or "gearbox#79.0"
 *       var entity = pickResult.entity;
 * }
 * ````
 *
 * To pick any pickable Entity, except for ````"gearbox#77.0"```` and ````"gearbox#79.0"````, picking through those
 * Entities if they happen to be in the way:
 *
 * ````javascript
 * var pickResult = scene.pick({
 *      canvasPos: [23, 131],
 *      excludeEntities: ["gearbox#77.0", "gearbox#79.0"]
 * });
 *
 * if (pickResult) {
 *       // Entity will never be "gearbox#77.0" or "gearbox#79.0"
 *       var entity = pickResult.entity;
 * }
 * ````
 *
 * See {@link Scene#pick} for more info on picking.
 *
 * ## Querying and tracking boundaries
 *
 * Getting a Scene's World-space axis-aligned boundary (AABB):
 *
 * ````javascript
 * var aabb = scene.aabb; // [xmin, ymin, zmin, xmax, ymax, zmax]
 * ````
 *
 * Subscribing to updates to the AABB, which occur whenever {@link Entity}s are transformed, their
 * {@link ReadableGeometry}s have been updated, or the {@link Camera} has moved:
 *
 * ````javascript
 * scene.on("boundary", function() {
 *      var aabb = scene.aabb;
 * });
 * ````
 *
 * Getting the AABB of the {@link Entity}s with the given IDs:
 *
 * ````JavaScript
 * scene.getAABB(); // Gets collective boundary of all Entities in the scene
 * scene.getAABB("saw"); // Gets boundary of an Object
 * scene.getAABB(["saw", "gearbox"]); // Gets collective boundary of two Objects
 * ````
 *
 * See {@link Scene#getAABB} and {@link Entity} for more info on querying and tracking boundaries.
 *
 * ## Managing the viewport
 *
 * The Scene's {@link Viewport} component manages the WebGL viewport:
 *
 * ````javascript
 * var viewport = scene.viewport
 * viewport.boundary = [0, 0, 500, 400];;
 * ````
 *
 * ## Controlling rendering
 *
 * You can configure a Scene to perform multiple "passes" (renders) per frame. This is useful when we want to render the
 * scene to multiple viewports, such as for stereo effects.
 *
 * In the example, below, we'll configure the Scene to render twice on each frame, each time to different viewport. We'll do this
 * with a callback that intercepts the Scene before each render and sets its {@link Viewport} to a
 * different portion of the canvas. By default, the Scene will clear the canvas only before the first render, allowing the
 * two views to be shown on the canvas at the same time.
 *
 * ````Javascript
 * var viewport = scene.viewport;
 *
 * // Configure Scene to render twice for each frame
 * scene.passes = 2; // Default is 1
 * scene.clearEachPass = false; // Default is false
 *
 * // Render to a separate viewport on each render
 *
 * var viewport = scene.viewport;
 * viewport.autoBoundary = false;
 *
 * scene.on("rendering", function (e) {
 *      switch (e.pass) {
 *          case 0:
 *              viewport.boundary = [0, 0, 200, 200]; // xmin, ymin, width, height
 *              break;
 *
 *          case 1:
 *              viewport.boundary = [200, 0, 200, 200];
 *              break;
 *      }
 * });
 *
 * // We can also intercept the Scene after each render,
 * // (though we're not using this for anything here)
 * scene.on("rendered", function (e) {
 *      switch (e.pass) {
 *          case 0:
 *              break;
 *
 *          case 1:
 *              break;
 *      }
 * });
 * ````
 *
 * ## Gamma correction
 *
 * Within its shaders, xeokit performs shading calculations in linear space.
 *
 * By default, the Scene expects color textures (eg. {@link PhongMaterial#diffuseMap},
 * {@link MetallicMaterial#baseColorMap} and {@link SpecularMaterial#diffuseMap}) to
 * be in pre-multipled gamma space, so will convert those to linear space before they are used in shaders. Other textures are
 * always expected to be in linear space.
 *
 * By default, the Scene will also gamma-correct its rendered output.
 *
 * You can configure the Scene to expect all those color textures to be linear space, so that it does not gamma-correct them:
 *
 * ````javascript
 * scene.gammaInput = false;
 * ````
 *
 * You would still need to gamma-correct the output, though, if it's going straight to the canvas, so normally we would
 * leave that enabled:
 *
 * ````javascript
 * scene.gammaOutput = true;
 * ````
 *
 * See {@link Texture} for more information on texture encoding and gamma.
 *
 * @class Scene
 */
/**
 * @private
 */
export class Scene extends Component {
    /**
     * @private
     * @constructor
     * @param {Viewer} viewer The Viewer this Scene belongs to.
     * @param {Object} cfg Scene configuration.
     * @param {String} [cfg.canvasId]  ID of an existing HTML canvas for the {@link Scene#canvas} - either this or canvasElement is mandatory. When both values are given, the element reference is always preferred to the ID.
     * @param {HTMLCanvasElement} [cfg.canvasElement] Reference of an existing HTML canvas for the {@link Scene#canvas} - either this or canvasId is mandatory. When both values are given, the element reference is always preferred to the ID.
     * @throws {String} Throws an exception when both canvasId or canvasElement are missing or they aren't pointing to a valid HTMLCanvasElement.
     */
    private constructor();
    _aabbDirty: boolean;
    /** Decremented each frame, triggers occlusion test for occludable {@link Marker}s when zero.
     * @private
     * @type {number}
     */
    private occlusionTestCountdown;
    /**
     The number of models currently loading.

     @property loading
     @final
     @type {Number}
     */
    loading: number;
    /**
     The epoch time (in milliseconds since 1970) when this Scene was instantiated.

     @property timeCreated
     @final
     @type {Number}
     */
    startTime: number;
    /**
     * Map of {@link Entity}s that represent models.
     *
     * Each {@link Entity} is mapped here by {@link Entity#id} when {@link Entity#isModel} is ````true````.
     *
     * @property models
     * @final
     * @type {{String:Entity}}
     */
    models: {
        String: any;
    };
    /**
     * Map of {@link Entity}s that represents objects.
     *
     * Each {@link Entity} is mapped here by {@link Entity#id} when {@link Entity#isObject} is ````true````.
     *
     * @property objects
     * @final
     * @type {{String:Entity}}
     */
    objects: {
        String: any;
    };
    _numObjects: number;
    /**
     * Map of currently visible {@link Entity}s that represent objects.
     *
     * An Entity represents an object if {@link Entity#isObject} is ````true````, and is visible when {@link Entity#visible} is true.
     *
     * @property visibleObjects
     * @final
     * @type {{String:Object}}
     */
    visibleObjects: {
        String: any;
    };
    _numVisibleObjects: number;
    /**
     * Map of currently xrayed {@link Entity}s that represent objects.
     *
     * An Entity represents an object if {@link Entity#isObject} is ````true````, and is xrayed when {@link Entity#xrayed} is true.
     *
     * Each {@link Entity} is mapped here by {@link Entity#id}.
     *
     * @property xrayedObjects
     * @final
     * @type {{String:Object}}
     */
    xrayedObjects: {
        String: any;
    };
    _numXRayedObjects: number;
    /**
     * Map of currently highlighted {@link Entity}s that represent objects.
     *
     * An Entity represents an object if {@link Entity#isObject} is ````true```` is true, and is highlighted when {@link Entity#highlighted} is true.
     *
     * Each {@link Entity} is mapped here by {@link Entity#id}.
     *
     * @property highlightedObjects
     * @final
     * @type {{String:Object}}
     */
    highlightedObjects: {
        String: any;
    };
    _numHighlightedObjects: number;
    /**
     * Map of currently selected {@link Entity}s that represent objects.
     *
     * An Entity represents an object if {@link Entity#isObject} is true, and is selected while {@link Entity#selected} is true.
     *
     * Each {@link Entity} is mapped here by {@link Entity#id}.
     *
     * @property selectedObjects
     * @final
     * @type {{String:Object}}
     */
    selectedObjects: {
        String: any;
    };
    _numSelectedObjects: number;
    /**
     * Map of currently colorized {@link Entity}s that represent objects.
     *
     * An Entity represents an object if {@link Entity#isObject} is ````true````.
     *
     * Each {@link Entity} is mapped here by {@link Entity#id}.
     *
     * @property colorizedObjects
     * @final
     * @type {{String:Object}}
     */
    colorizedObjects: {
        String: any;
    };
    _numColorizedObjects: number;
    /**
     * Map of {@link Entity}s that represent objects whose opacity was updated.
     *
     * An Entity represents an object if {@link Entity#isObject} is ````true````.
     *
     * Each {@link Entity} is mapped here by {@link Entity#id}.
     *
     * @property opacityObjects
     * @final
     * @type {{String:Object}}
     */
    opacityObjects: {
        String: any;
    };
    _numOpacityObjects: number;
    /**
     * Map of {@link Entity}s that represent objects whose {@link Entity#offset}s were updated.
     *
     * An Entity represents an object if {@link Entity#isObject} is ````true````.
     *
     * Each {@link Entity} is mapped here by {@link Entity#id}.
     *
     * @property offsetObjects
     * @final
     * @type {{String:Object}}
     */
    offsetObjects: {
        String: any;
    };
    _numOffsetObjects: number;
    /**
     Lazy-regenerated ID lists.
     */
    _modelIds: string[];
    _objectIds: string[];
    _visibleObjectIds: string[];
    _xrayedObjectIds: string[];
    _highlightedObjectIds: string[];
    _selectedObjectIds: string[];
    _colorizedObjectIds: string[];
    _opacityObjectIds: string[];
    _offsetObjectIds: string[];
    _collidables: {};
    _compilables: {};
    _needRecompile: boolean;
    /**
     * For each {@link Component} type, a map of IDs to {@link Component} instances of that type.
     *
     * @type {{String:{String:Component}}}
     */
    types: {
        String: {
            String: Component;
        };
    };
    /**
     * The {@link Component}s within this Scene, each mapped to its {@link Component#id}.
     *
     * *@type {{String:Component}}
     */
    components: {};
    /**
     * The {@link SectionPlane}s in this Scene, each mapped to its {@link SectionPlane#id}.
     *
     * @type {{String:SectionPlane}}
     */
    sectionPlanes: {
        String: any;
    };
    /**
     * The {@link Light}s in this Scene, each mapped to its {@link Light#id}.
     *
     * @type {{String:Light}}
     */
    lights: {
        String: any;
    };
    /**
     * The {@link LightMap}s in this Scene, each mapped to its {@link LightMap#id}.
     *
     * @type {{String:LightMap}}
     */
    lightMaps: {
        String: any;
    };
    /**
     * The {@link ReflectionMap}s in this Scene, each mapped to its {@link ReflectionMap#id}.
     *
     * @type {{String:ReflectionMap}}
     */
    reflectionMaps: {
        String: any;
    };
    /**
     * The real world offset for this Scene
     *
     * @type {Number[]}
     */
    realWorldOffset: number[];
    /**
     * Manages the HTML5 canvas for this Scene.
     *
     * @type {Canvas}
     */
    canvas: Canvas;
    /**
     * @private
     */
    private _sectionPlanesState;
    /**
     * @private
     */
    private _lightsState;
    /**
     * Publishes input events that occur on this Scene's canvas.
     *
     * @property input
     * @type {Input}
     * @final
     */
    input: Input;
    /**
     * Configures this Scene's units of measurement and coordinate mapping between Real-space and World-space 3D coordinate systems.
     *
     * @property metrics
     * @type {Metrics}
     * @final
     */
    metrics: Metrics;
    /** Configures Scalable Ambient Obscurance (SAO) for this Scene.
     * @type {SAO}
     * @final
     */
    sao: SAO;
    /**
     * Sets the number of "ticks" that happen between each render or this Scene.
     *
     * Default value is ````1````.
     *
     * @type {Number}
     */
    set ticksPerRender(arg: number);
    /**
     * Gets the number of "ticks" that happen between each render or this Scene.
     *
     * Default value is ````1````.
     *
     * @type {Number}
     */
    get ticksPerRender(): number;
    /**
     * Sets the number of "ticks" that happen between occlusion testing for {@link Marker}s.
     *
     * Default value is ````20````.
     *
     * @type {Number}
     */
    set ticksPerOcclusionTest(arg: number);
    /**
     * Gets the number of "ticks" that happen between each render of this Scene.
     *
     * Default value is ````1````.
     *
     * @type {Number}
     */
    get ticksPerOcclusionTest(): number;
    /**
     * Sets the number of times this Scene renders per frame.
     *
     * Default value is ````1````.
     *
     * @type {Number}
     */
    set passes(arg: number);
    /**
     * Gets the number of times this Scene renders per frame.
     *
     * Default value is ````1````.
     *
     * @type {Number}
     */
    get passes(): number;
    /**
     * When {@link Scene#passes} is greater than ````1````, indicates whether or not to clear the canvas before each pass (````true````) or just before the first pass (````false````).
     *
     * Default value is ````false````.
     *
     * @type {Boolean}
     */
    set clearEachPass(arg: boolean);
    /**
     * When {@link Scene#passes} is greater than ````1````, indicates whether or not to clear the canvas before each pass (````true````) or just before the first pass (````false````).
     *
     * Default value is ````false````.
     *
     * @type {Boolean}
     */
    get clearEachPass(): boolean;
    /**
     * Sets whether or not {@link Scene} should expect all {@link Texture}s and colors to have pre-multiplied gamma.
     *
     * Default value is ````false````.
     *
     * @type {Boolean}
     */
    set gammaInput(arg: boolean);
    /**
     * Gets whether or not {@link Scene} should expect all {@link Texture}s and colors to have pre-multiplied gamma.
     *
     * Default value is ````false````.
     *
     * @type {Boolean}
     */
    get gammaInput(): boolean;
    /**
     * Sets whether or not to render pixels with pre-multiplied gama.
     *
     * Default value is ````false````.
     *
     * @type {Boolean}
     */
    set gammaOutput(arg: boolean);
    /**
     * Gets whether or not to render pixels with pre-multiplied gama.
     *
     * Default value is ````true````.
     *
     * @type {Boolean}
     */
    get gammaOutput(): boolean;
    /**
     * Sets the gamma factor to use when {@link Scene#gammaOutput} is set true.
     *
     * Default value is ````2.2````.
     *
     * @type {Number}
     */
    set gammaFactor(arg: number);
    /**
     * Gets the gamma factor to use when {@link Scene#gammaOutput} is set true.
     *
     * Default value is ````2.2````.
     *
     * @type {Number}
     */
    get gammaFactor(): number;
    _entityOffsetsEnabled: boolean;
    _logarithmicDepthBufferEnabled: boolean;
    _pbrEnabled: boolean;
    _viewport: any;
    _camera: any;
    _initDefaults(): void;
    _addComponent(component: any): void;
    _removeComponent(component: any): void;
    _sectionPlaneCreated(sectionPlane: any): void;
    _lightCreated(light: any): void;
    _lightMapCreated(lightMap: any): void;
    _reflectionMapCreated(reflectionMap: any): void;
    _sectionPlaneDestroyed(sectionPlane: any): void;
    _lightDestroyed(light: any): void;
    _lightMapDestroyed(lightMap: any): void;
    _reflectionMapDestroyed(reflectionMap: any): void;
    _registerModel(entity: any): void;
    _deregisterModel(entity: any): void;
    _registerObject(entity: any): void;
    _deregisterObject(entity: any): void;
    _objectVisibilityUpdated(entity: any, notify?: boolean): void;
    _objectXRayedUpdated(entity: any): void;
    _objectHighlightedUpdated(entity: any): void;
    _objectSelectedUpdated(entity: any): void;
    _objectColorizeUpdated(entity: any, colorized: any): void;
    _objectOpacityUpdated(entity: any, opacityUpdated: any): void;
    _objectOffsetUpdated(entity: any, offset: any): void;
    _webglContextLost(): void;
    _webglContextRestored(): void;
    /**
     * Whether {@link Entity#offset} is enabled.
     *
     * This is set via the {@link Viewer} constructor and is ````false```` by default.
     *
     * @returns {Boolean} True if {@link Entity#offset} is enabled.
     */
    get entityOffsetsEnabled(): boolean;
    /**
     * Whether logarithmic depth buffer is enabled.
     *
     * This is set via the {@link Viewer} constructor and is ````false```` by default.
     *
     * @returns {Boolean} True if logarithmic depth buffer is enabled.
     */
    get logarithmicDepthBufferEnabled(): boolean;
    /**
     * Sets whether physically-based rendering is enabled.
     *
     * Default is ````false````.
     *
     * @returns {Boolean} True if quality rendering is enabled.
     */
    set pbrEnabled(arg: boolean);
    /**
     * Sets whether quality rendering is enabled.
     *
     * Default is ````false````.
     *
     * @returns {Boolean} True if quality rendering is enabled.
     */
    get pbrEnabled(): boolean;
    /**
     * Performs an occlusion test on all {@link Marker}s in this {@link Scene}.
     *
     * Sets each {@link Marker#visible} ````true```` if the Marker is currently not occluded by any opaque {@link Entity}s
     * in the Scene, or ````false```` if an Entity is occluding it.
     */
    doOcclusionTest(): void;
    /**
     * Renders a single frame of this Scene.
     *
     * The Scene will periodically render itself after any updates, but you can call this method to force a render
     * if required.
     *
     * @param {Boolean} [forceRender=false] Forces a render when true, otherwise only renders if something has changed in this Scene
     * since the last render.
     */
    render(forceRender?: boolean): void;
    _recompile(): void;
    _saveAmbientColor(): void;
    _lastAmbientColor: any;
    /**
     * Gets the IDs of the {@link Entity}s in {@link Scene#models}.
     *
     * @type {String[]}
     */
    get modelIds(): string[];
    /**
     * Gets the number of {@link Entity}s in {@link Scene#objects}.
     *
     * @type {Number}
     */
    get numObjects(): number;
    /**
     * Gets the IDs of the {@link Entity}s in {@link Scene#objects}.
     *
     * @type {String[]}
     */
    get objectIds(): string[];
    /**
     * Gets the number of {@link Entity}s in {@link Scene#visibleObjects}.
     *
     * @type {Number}
     */
    get numVisibleObjects(): number;
    /**
     * Gets the IDs of the {@link Entity}s in {@link Scene#visibleObjects}.
     *
     * @type {String[]}
     */
    get visibleObjectIds(): string[];
    /**
     * Gets the number of {@link Entity}s in {@link Scene#xrayedObjects}.
     *
     * @type {Number}
     */
    get numXRayedObjects(): number;
    /**
     * Gets the IDs of the {@link Entity}s in {@link Scene#xrayedObjects}.
     *
     * @type {String[]}
     */
    get xrayedObjectIds(): string[];
    /**
     * Gets the number of {@link Entity}s in {@link Scene#highlightedObjects}.
     *
     * @type {Number}
     */
    get numHighlightedObjects(): number;
    /**
     * Gets the IDs of the {@link Entity}s in {@link Scene#highlightedObjects}.
     *
     * @type {String[]}
     */
    get highlightedObjectIds(): string[];
    /**
     * Gets the number of {@link Entity}s in {@link Scene#selectedObjects}.
     *
     * @type {Number}
     */
    get numSelectedObjects(): number;
    /**
     * Gets the IDs of the {@link Entity}s in {@link Scene#selectedObjects}.
     *
     * @type {String[]}
     */
    get selectedObjectIds(): string[];
    /**
     * Gets the number of {@link Entity}s in {@link Scene#colorizedObjects}.
     *
     * @type {Number}
     */
    get numColorizedObjects(): number;
    /**
     * Gets the IDs of the {@link Entity}s in {@link Scene#colorizedObjects}.
     *
     * @type {String[]}
     */
    get colorizedObjectIds(): string[];
    /**
     * Gets the IDs of the {@link Entity}s in {@link Scene#opacityObjects}.
     *
     * @type {String[]}
     */
    get opacityObjectIds(): string[];
    /**
     * Gets the IDs of the {@link Entity}s in {@link Scene#offsetObjects}.
     *
     * @type {String[]}
     */
    get offsetObjectIds(): string[];
    _ticksPerRender: any;
    _ticksPerOcclusionTest: any;
    _passes: any;
    _clearEachPass: any;
    /**
     * Gets the default {@link Geometry} for this Scene, which is a {@link ReadableGeometry} with a unit-sized box shape.
     *
     * Has {@link ReadableGeometry#id} set to "default.geometry".
     *
     * {@link Mesh}s in this Scene have {@link Mesh#geometry} set to this {@link ReadableGeometry} by default.
     *
     * @type {ReadableGeometry}
     */
    get geometry(): ReadableGeometry;
    /**
     * Gets the default {@link Material} for this Scene, which is a {@link PhongMaterial}.
     *
     * Has {@link PhongMaterial#id} set to "default.material".
     *
     * {@link Mesh}s in this Scene have {@link Mesh#material} set to this {@link PhongMaterial} by default.
     *
     * @type {PhongMaterial}
     */
    get material(): PhongMaterial;
    /**
     * Gets the default xraying {@link EmphasisMaterial} for this Scene.
     *
     * Has {@link EmphasisMaterial#id} set to "default.xrayMaterial".
     *
     * {@link Mesh}s in this Scene have {@link Mesh#xrayMaterial} set to this {@link EmphasisMaterial} by default.
     *
     * {@link Mesh}s are xrayed while {@link Mesh#xrayed} is ````true````.
     *
     * @type {EmphasisMaterial}
     */
    get xrayMaterial(): EmphasisMaterial;
    /**
     * Gets the default highlight {@link EmphasisMaterial} for this Scene.
     *
     * Has {@link EmphasisMaterial#id} set to "default.highlightMaterial".
     *
     * {@link Mesh}s in this Scene have {@link Mesh#highlightMaterial} set to this {@link EmphasisMaterial} by default.
     *
     * {@link Mesh}s are highlighted while {@link Mesh#highlighted} is ````true````.
     *
     * @type {EmphasisMaterial}
     */
    get highlightMaterial(): EmphasisMaterial;
    /**
     * Gets the default selection {@link EmphasisMaterial} for this Scene.
     *
     * Has {@link EmphasisMaterial#id} set to "default.selectedMaterial".
     *
     * {@link Mesh}s in this Scene have {@link Mesh#highlightMaterial} set to this {@link EmphasisMaterial} by default.
     *
     * {@link Mesh}s are highlighted while {@link Mesh#highlighted} is ````true````.
     *
     * @type {EmphasisMaterial}
     */
    get selectedMaterial(): EmphasisMaterial;
    /**
     * Gets the default {@link EdgeMaterial} for this Scene.
     *
     * Has {@link EdgeMaterial#id} set to "default.edgeMaterial".
     *
     * {@link Mesh}s in this Scene have {@link Mesh#edgeMaterial} set to this {@link EdgeMaterial} by default.
     *
     * {@link Mesh}s have their edges emphasized while {@link Mesh#edges} is ````true````.
     *
     * @type {EdgeMaterial}
     */
    get edgeMaterial(): EdgeMaterial;
    /**
     * Gets the {@link PointsMaterial} for this Scene.
     *
     * @type {PointsMaterial}
     */
    get pointsMaterial(): PointsMaterial;
    /**
     * Gets the {@link LinesMaterial} for this Scene.
     *
     * @type {LinesMaterial}
     */
    get linesMaterial(): LinesMaterial;
    /**
     * Gets the {@link Viewport} for this Scene.
     *
     * @type Viewport
     */
    get viewport(): Viewport;
    /**
     * Gets the {@link Camera} for this Scene.
     *
     * @type {Camera}
     */
    get camera(): Camera;
    /**
     * Gets the World-space 3D center of this Scene.
     *
     *@type {Number[]}
     */
    get center(): number[];
    _center: any;
    /**
     * Gets the World-space axis-aligned 3D boundary (AABB) of this Scene.
     *
     * The AABB is represented by a six-element Float64Array containing the min/max extents of the axis-aligned volume, ie. ````[xmin, ymin,zmin,xmax,ymax, zmax]````.
     *
     * When the Scene has no content, will be ````[-100,-100,-100,100,100,100]````.
     *
     * @type {Number[]}
     */
    get aabb(): number[];
    _aabb: any;
    _setAABBDirty(): void;
    /**
     * Attempts to pick an {@link Entity} in this Scene.
     *
     * Ignores {@link Entity}s with {@link Entity#pickable} set ````false````.
     *
     * When an {@link Entity} is picked, fires a "pick" event on the {@link Entity} with the pick result as parameters.
     *
     * Picking the {@link Entity} at the given canvas coordinates:

     * ````javascript
     * var pickResult = scene.pick({
     *          canvasPos: [23, 131]
     *       });
     *
     * if (pickResult) { // Picked an Entity
     *         var entity = pickResult.entity;
     *     }
     * ````
     *
     * Picking, with a ray cast through the canvas, hits an {@link Entity}:
     *
     * ````javascript
     * var pickResult = scene.pick({
     *         pickSurface: true,
     *         canvasPos: [23, 131]
     *      });
     *
     * if (pickResult) { // Picked an Entity
     *
     *     var entity = pickResult.entity;
     *
     *     if (pickResult.primitive === "triangle") {
     *
     *         // Picked a triangle on the entity surface
     *
     *         var primIndex = pickResult.primIndex; // Position of triangle's first index in the picked Entity's Geometry's indices array
     *         var indices = pickResult.indices; // UInt32Array containing the triangle's vertex indices
     *         var localPos = pickResult.localPos; // Float64Array containing the picked Local-space position on the triangle
     *         var worldPos = pickResult.worldPos; // Float64Array containing the picked World-space position on the triangle
     *         var viewPos = pickResult.viewPos; // Float64Array containing the picked View-space position on the triangle
     *         var bary = pickResult.bary; // Float64Array containing the picked barycentric position within the triangle
     *         var worldNormal = pickResult.worldNormal; // Float64Array containing the interpolated World-space normal vector at the picked position on the triangle
     *         var uv = pickResult.uv; // Float64Array containing the interpolated UV coordinates at the picked position on the triangle
     *
     *     } else if (pickResult.worldPos && pickResult.worldNormal) {
     *
     *         // Picked a point and normal on the entity surface
     *
     *         var worldPos = pickResult.worldPos; // Float64Array containing the picked World-space position on the Entity surface
     *         var worldNormal = pickResult.worldNormal; // Float64Array containing the picked World-space normal vector on the Entity Surface
     *     }
     * }
     * ````
     *
     * Picking the {@link Entity} that intersects an arbitrarily-aligned World-space ray:
     *
     * ````javascript
     * var pickResult = scene.pick({
     *       pickSurface: true,   // Picking with arbitrarily-positioned ray
     *       origin: [0,0,-5],    // Ray origin
     *       direction: [0,0,1]   // Ray direction
     * });
     *
     * if (pickResult) { // Picked an Entity with the ray
     *
     *       var entity = pickResult.entity;
     *
     *       if (pickResult.primitive == "triangle") {
     *
     *          // Picked a triangle on the entity surface
     *
     *           var primitive = pickResult.primitive; // Type of primitive that was picked, usually "triangles"
     *           var primIndex = pickResult.primIndex; // Position of triangle's first index in the picked Entity's Geometry's indices array
     *           var indices = pickResult.indices; // UInt32Array containing the triangle's vertex indices
     *           var localPos = pickResult.localPos; // Float64Array containing the picked Local-space position on the triangle
     *           var worldPos = pickResult.worldPos; // Float64Array containing the picked World-space position on the triangle
     *           var viewPos = pickResult.viewPos; // Float64Array containing the picked View-space position on the triangle
     *           var bary = pickResult.bary; // Float64Array containing the picked barycentric position within the triangle
     *           var worldNormal = pickResult.worldNormal; // Float64Array containing the interpolated World-space normal vector at the picked position on the triangle
     *           var uv = pickResult.uv; // Float64Array containing the interpolated UV coordinates at the picked position on the triangle
     *           var origin = pickResult.origin; // Float64Array containing the World-space ray origin
     *           var direction = pickResult.direction; // Float64Array containing the World-space ray direction
     *
     *     } else if (pickResult.worldPos && pickResult.worldNormal) {
     *
     *         // Picked a point and normal on the entity surface
     *
     *         var worldPos = pickResult.worldPos; // Float64Array containing the picked World-space position on the Entity surface
     *         var worldNormal = pickResult.worldNormal; // Float64Array containing the picked World-space normal vector on the Entity Surface
     *     }
     * }
     *  ````
     *
     * @param {*} params Picking parameters.
     * @param {Boolean} [params.pickSurface=false] Whether to find the picked position on the surface of the Entity.
     * @param {Boolean} [params.pickSurfaceNormal=false] Whether to find the picked normal on the surface of the Entity. Only works if ````pickSurface```` is given.
     * @param {Number[]} [params.canvasPos] Canvas-space coordinates. When ray-picking, this will override the **origin** and ** direction** parameters and will cause the ray to be fired through the canvas at this position, directly along the negative View-space Z-axis.
     * @param {Number[]} [params.origin] World-space ray origin when ray-picking. Ignored when canvasPos given.
     * @param {Number[]} [params.direction] World-space ray direction when ray-picking. Also indicates the length of the ray. Ignored when canvasPos given.
     * @param {Number[]} [params.matrix] 4x4 transformation matrix to define the World-space ray origin and direction, as an alternative to ````origin```` and ````direction````.
     * @param {String[]} [params.includeEntities] IDs of {@link Entity}s to restrict picking to. When given, ignores {@link Entity}s whose IDs are not in this list.
     * @param {String[]} [params.excludeEntities] IDs of {@link Entity}s to ignore. When given, will pick *through* these {@link Entity}s, as if they were not there.
     * @param {PickResult} [pickResult] Holds the results of the pick attempt. Will use the Scene's singleton PickResult if you don't supply your own.
     * @returns {PickResult} Holds results of the pick attempt, returned when an {@link Entity} is picked, else null. See method comments for description.
     */
    pick(params: any, pickResult?: any): any;
    /**
     * Destroys all {@link Light}s in this Scene..
     */
    clearLights(): void;
    /**
     * Destroys all {@link SectionPlane}s in this Scene.
     */
    clearSectionPlanes(): void;
    /**
     * Gets the collective axis-aligned boundary (AABB) of a batch of {@link Entity}s that represent objects.
     *
     * An {@link Entity} represents an object when {@link Entity#isObject} is ````true````.
     *
     * Each {@link Entity} on which {@link Entity#isObject} is registered by {@link Entity#id} in {@link Scene#visibleObjects}.
     *
     * Each {@link Entity} is only included in the AABB when {@link Entity#collidable} is ````true````.
     *
     * @param {String[]} ids Array of {@link Entity#id} values.
     * @returns {[Number, Number, Number, Number, Number, Number]} An axis-aligned World-space bounding box, given as elements ````[xmin, ymin, zmin, xmax, ymax, zmax]````.
     */
    getAABB(ids: string[]): [number, number, number, number, number, number];
    /**
     * Batch-updates {@link Entity#visible} on {@link Entity}s that represent objects.
     *
     * An {@link Entity} represents an object when {@link Entity#isObject} is ````true````.
     *
     * Each {@link Entity} on which both {@link Entity#isObject} and {@link Entity#visible} are ````true```` is
     * registered by {@link Entity#id} in {@link Scene#visibleObjects}.
     *
     * @param {String[]} ids Array of {@link Entity#id} values.
     * @param {Boolean} visible Whether or not to cull.
     * @returns {Boolean} True if any {@link Entity}s were updated, else false if all updates were redundant and not applied.
     */
    setObjectsVisible(ids: string[], visible: boolean): boolean;
    /**
     * Batch-updates {@link Entity#collidable} on {@link Entity}s that represent objects.
     *
     * An {@link Entity} represents an object when {@link Entity#isObject} is ````true````.
     *
     * @param {String[]} ids Array of {@link Entity#id} values.
     * @param {Boolean} collidable Whether or not to cull.
     * @returns {Boolean} True if any {@link Entity}s were updated, else false if all updates were redundant and not applied.
     */
    setObjectsCollidable(ids: string[], collidable: boolean): boolean;
    /**
     * Batch-updates {@link Entity#culled} on {@link Entity}s that represent objects.
     *
     * An {@link Entity} represents an object when {@link Entity#isObject} is ````true````.
     *
     * @param {String[]} ids Array of {@link Entity#id} values.
     * @param {Boolean} culled Whether or not to cull.
     * @returns {Boolean} True if any {@link Entity}s were updated, else false if all updates were redundant and not applied.
     */
    setObjectsCulled(ids: string[], culled: boolean): boolean;
    /**
     * Batch-updates {@link Entity#selected} on {@link Entity}s that represent objects.
     *
     * An {@link Entity} represents an object when {@link Entity#isObject} is ````true````.
     *
     * Each {@link Entity} on which both {@link Entity#isObject} and {@link Entity#selected} are ````true```` is
     * registered by {@link Entity#id} in {@link Scene#selectedObjects}.
     *
     * @param {String[]} ids Array of {@link Entity#id} values.
     * @param {Boolean} selected Whether or not to highlight.
     * @returns {Boolean} True if any {@link Entity}s were updated, else false if all updates were redundant and not applied.
     */
    setObjectsSelected(ids: string[], selected: boolean): boolean;
    /**
     * Batch-updates {@link Entity#highlighted} on {@link Entity}s that represent objects.
     *
     * An {@link Entity} represents an object when {@link Entity#isObject} is ````true````.
     *
     * Each {@link Entity} on which both {@link Entity#isObject} and {@link Entity#highlighted} are ````true```` is
     * registered by {@link Entity#id} in {@link Scene#highlightedObjects}.
     *
     * @param {String[]} ids Array of {@link Entity#id} values.
     * @param {Boolean} highlighted Whether or not to highlight.
     * @returns {Boolean} True if any {@link Entity}s were updated, else false if all updates were redundant and not applied.
     */
    setObjectsHighlighted(ids: string[], highlighted: boolean): boolean;
    /**
     * Batch-updates {@link Entity#xrayed} on {@link Entity}s that represent objects.
     *
     * An {@link Entity} represents an object when {@link Entity#isObject} is ````true````.
     *
     * Each {@link Entity} on which both {@link Entity#isObject} and {@link Entity#xrayed} are ````true```` is
     * registered by {@link Entity#id} in {@link Scene#xrayedObjects}.
     *
     * @param {String[]} ids Array of {@link Entity#id} values.
     * @param {Boolean} xrayed Whether or not to xray.
     * @returns {Boolean} True if any {@link Entity}s were updated, else false if all updates were redundant and not applied.
     */
    setObjectsXRayed(ids: string[], xrayed: boolean): boolean;
    /**
     * Batch-updates {@link Entity#edges} on {@link Entity}s that represent objects.
     *
     * An {@link Entity} represents an object when {@link Entity#isObject} is ````true````.
     *
     * @param {String[]} ids Array of {@link Entity#id} values.
     * @param {Boolean} edges Whether or not to show edges.
     * @returns {Boolean} True if any {@link Entity}s were updated, else false if all updates were redundant and not applied.
     */
    setObjectsEdges(ids: string[], edges: boolean): boolean;
    /**
     * Batch-updates {@link Entity#colorize} on {@link Entity}s that represent objects.
     *
     * An {@link Entity} represents an object when {@link Entity#isObject} is ````true````.
     *
     * @param {String[]} ids Array of {@link Entity#id} values.
     * @param {Number[]} [colorize=(1,1,1)] RGB colorize factors, multiplied by the rendered pixel colors.
     * @returns {Boolean} True if any {@link Entity}s changed opacity, else false if all updates were redundant and not applied.
     */
    setObjectsColorized(ids: string[], colorize?: number[]): boolean;
    /**
     * Batch-updates {@link Entity#opacity} on {@link Entity}s that represent objects.
     *
     * An {@link Entity} represents an object when {@link Entity#isObject} is ````true````.
     *
     * @param {String[]} ids Array of {@link Entity#id} values.
     * @param {Number} [opacity=1.0] Opacity factor, multiplied by the rendered pixel alphas.
     * @returns {Boolean} True if any {@link Entity}s changed opacity, else false if all updates were redundant and not applied.
     */
    setObjectsOpacity(ids: string[], opacity?: number): boolean;
    /**
     * Batch-updates {@link Entity#pickable} on {@link Entity}s that represent objects.
     *
     * An {@link Entity} represents an object when {@link Entity#isObject} is ````true````.
     *
     * @param {String[]} ids Array of {@link Entity#id} values.
     * @param {Boolean} pickable Whether or not to enable picking.
     * @returns {Boolean} True if any {@link Entity}s were updated, else false if all updates were redundant and not applied.
     */
    setObjectsPickable(ids: string[], pickable: boolean): boolean;
    /**
     * Batch-updates {@link Entity#offset} on {@link Entity}s that represent objects.
     *
     * An {@link Entity} represents an object when {@link Entity#isObject} is ````true````.
     *
     * @param {String[]} ids Array of {@link Entity#id} values.
     * @param {Number[]} [offset] 3D offset vector.
     */
    setObjectsOffset(ids: string[], offset?: number[]): void;
    /**
     * Iterates with a callback over {@link Entity#visible} on {@link Entity}s that represent objects.
     *
     * An {@link Entity} represents an object when {@link Entity#isObject} is ````true````.
     *
     * Each {@link Entity} on which both {@link Entity#isObject} and {@link Entity#visible} are ````true```` is
     * registered by {@link Entity#id} in {@link Scene#visibleObjects}.
     *
     * @param {String[]} ids Array of {@link Entity#id} values.
     * @param {Function} callback Callback to execute on eacn {@link Entity}.
     * @returns {Boolean} True if any {@link Entity}s were updated, else false if all updates were redundant and not applied.
     */
    withObjects(ids: string[], callback: Function): boolean;
}
import { Component } from "../Component.js";
import { Canvas } from "../canvas/Canvas.js";
import { Input } from "../input/Input.js";
import { Metrics } from "../metriqs/Metriqs.js";
import { SAO } from "../postfx/SAO.js";
import { ReadableGeometry } from "../geometry/ReadableGeometry.js";
import { PhongMaterial } from "../materials/PhongMaterial.js";
import { EmphasisMaterial } from "../materials/EmphasisMaterial.js";
import { EdgeMaterial } from "../materials/EdgeMaterial.js";
import { PointsMaterial } from "../materials/PointsMaterial.js";
import { LinesMaterial } from "../materials/LinesMaterial.js";
import { Viewport } from "../viewport/Viewport.js";
import { Camera } from "../camera/Camera.js";
