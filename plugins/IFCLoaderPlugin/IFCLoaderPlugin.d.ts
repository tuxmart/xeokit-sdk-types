/**
 * Experimental {@link Viewer} plugin that loads BIM models directly from IFC files.
 *
 * <a href="https://xeokit.github.io/xeokit-sdk/examples/#BIMOffline_IFC_Duplex"><img src="https://xeokit.io/img/docs/IFCLoaderPlugin/IFCLoaderPlugin.png"></a>
 *
 * [[Run this example](https://xeokit.github.io/xeokit-sdk/examples/#BIMOffline_IFC_Duplex)]
 *
 * ## Overview
 *
 * * Loads small-to-medium sized BIM models directly from IFC files.
 * * Uses [web-ifc](https://github.com/tomvandig/web-ifc) internally, to parse IFC files in the browser.
 * * Loads IFC geometry, element structure metadata, and property sets.
 * * Not for large models. For best performance with large models, we recommend using {@link XKTLoaderPlugin}.
 * * Loads double-precision coordinates, enabling models to be viewed at global coordinates without accuracy loss.
 * * Allows to set the position, scale and rotation of each model as you load it.
 * * Filter which IFC types get loaded.
 * * Configure initial appearances of specified IFC types.
 * * Set a custom data source for IFC files.
 * * Load multiple copies of the same model.
 *
 * ## Limitations
 *
 * IFCLoaderPlugin has certain limitations:
 *
 * * Downloads IFC files over the network, which can be large.
 * * Parsing large IFC files can crash the browser (suspect overrunning browser memory limits).
 * * No IFC geometry reuse yet.
 * <br><br>
 * Despite these limitations, IFCLoaderPlugin may still be perfect for small-scale IFC model viewing
 * applications, and for getting started with xeokit and IFC in general.
 *
 * ## Scene representation
 *
 * When loading a model, IFCLoaderPlugin creates an {@link Entity} that represents the model, which
 * will have {@link Entity#isModel} set ````true```` and will be registered by {@link Entity#id}
 * in {@link Scene#models}. The IFCLoaderPlugin also creates an {@link Entity} for each object within the
 * model. Those Entities will have {@link Entity#isObject} set ````true```` and will be registered
 * by {@link Entity#id} in {@link Scene#objects}.
 *
 * ## Metadata
 *
 * When loading a model, IFCLoaderPlugin also creates a {@link MetaModel} that represents the model, which contains
 * a {@link MetaObject} for each IFC element, plus a {@link PropertySet} for each IFC property set. Loading metadata can be very slow, so we can also optionally disable it if we
 * don't need it.
 *
 * ## Usage
 *
 * In the example below we'll load the Duplex BIM model from
 * an [IFC file](https://github.com/xeokit/xeokit-sdk/tree/master/examples/models/ifc/Duplex.ifc). Within our {@link Viewer}, this will create a bunch of {@link Entity}s that represents the model and its objects, along with a {@link MetaModel}, {@link MetaObject}s and {@link PropertySet}s
 * that hold their metadata.
 *
 * Since this model contains IFC types, the IFCLoaderPlugin will set the initial appearance of each object
 * {@link Entity} according to its IFC type in {@link IFCLoaderPlugin#objectDefaults}.
 *
 * * [[Run example](https://xeokit.github.io/xeokit-sdk/examples/#BIMOffline_IFC_isolateStorey)]
 *
 * ````javascript
 * import {Viewer, IFCLoaderPlugin} from "xeokit-sdk.es.js";
 *
 * //------------------------------------------------------------------------------------------------------------------
 * // 1. Create a Viewer,
 * // 2. Arrange the camera
 * //------------------------------------------------------------------------------------------------------------------
 *
 * // 1
 * const viewer = new Viewer({
 *      canvasId: "myCanvas",
 *      transparent: true
 * });
 *
 * // 2
 * viewer.camera.eye = [-2.56, 8.38, 8.27];
 * viewer.camera.look = [13.44, 3.31, -14.83];
 * viewer.camera.up = [0.10, 0.98, -0.14];
 *
 * //------------------------------------------------------------------------------------------------------------------
 * // 1. Create a IFCLoaderPlugin, configured with a path to the bundled third-party web-ifc.wasm module
 * // 2. Load a BIM model fom an IFC file, excluding its IfcSpace elements, and highlighting edges
 * //------------------------------------------------------------------------------------------------------------------
 *
 * // 1
 * const ifcLoader = new IFCLoaderPlugin(viewer, {
 *     wasmPath: "../dist/" // <<------- Path to web-ifc.wasm, which does the IFC parsing for us
 * });
 *
 * // 2
 * const model = ifcLoader.load({          // Returns an Entity that represents the model
 *     id: "myModel",
 *     src: "../assets/models/ifc/Duplex.ifc",
 *     excludeTypes: ["IfcSpace"],
 *     edges: true
 * });
 *
 * model.on("loaded", () => {
 *
 *     //--------------------------------------------------------------------------------------------------------------
 *     // 1. Find metadata on the bottom storey
 *     // 2. X-ray all the objects except for the bottom storey
 *     // 3. Fit the bottom storey in view
 *     //--------------------------------------------------------------------------------------------------------------
 *
 *     // 1
 *     const metaModel = viewer.metaScene.metaModels["myModel"];       // MetaModel with ID "myModel"
 *     const metaObject
 *          = viewer.metaScene.metaObjects["1xS3BCk291UvhgP2dvNsgp"];  // MetaObject with ID "1xS3BCk291UvhgP2dvNsgp"
 *
 *     const name = metaObject.name;                                   // "01 eerste verdieping"
 *     const type = metaObject.type;                                   // "IfcBuildingStorey"
 *     const parent = metaObject.parent;                               // MetaObject with type "IfcBuilding"
 *     const children = metaObject.children;                           // Array of child MetaObjects
 *     const objectId = metaObject.id;                                 // "1xS3BCk291UvhgP2dvNsgp"
 *     const objectIds = viewer.metaScene.getObjectIDsInSubtree(objectId);   // IDs of leaf sub-objects
 *     const aabb = viewer.scene.getAABB(objectIds);                   // Axis-aligned boundary of the leaf sub-objects
 *
 *     // 2
 *     viewer.scene.setObjectsXRayed(viewer.scene.objectIds, true);
 *     viewer.scene.setObjectsXRayed(objectIds, false);
 *
 *     // 3
 *     viewer.cameraFlight.flyTo(aabb);
 * });
 *
 * // Find the model Entity by ID
 * model = viewer.scene.models["myModel"];
 *
 * // Destroy the model
 * model.destroy();
 * ````
 *
 * ## Transforming
 *
 * We have the option to rotate, scale and translate each  IFC model as we load it.
 *
 * This lets us load multiple models, or even multiple copies of the same model, and position them apart from each other.
 *
 * In the example below, we'll scale our model to half its size, rotate it 90 degrees about its local X-axis, then
 * translate it 100 units along its X axis.
 *
 * ````javascript
 * ifcLoader.load({
 *      src: "../assets/models/ifc/Duplex.ifc",
 *      rotation: [90,0,0],
 *      scale: [0.5, 0.5, 0.5],
 *      origin: [100, 0, 0]
 * });
 * ````
 *
 * ## Including and excluding IFC types
 *
 * We can also load only those objects that have the specified IFC types.
 *
 * In the example below, we'll load only the objects that represent walls.
 *
 * ````javascript
 * const model2 = ifcLoader.load({
 *     id: "myModel2",
 *     src: "../assets/models/ifc/Duplex.ifc",
 *     includeTypes: ["IfcWallStandardCase"]
 * });
 * ````
 *
 * We can also load only those objects that **don't** have the specified IFC types.
 *
 * In the example below, we'll load only the objects that do not represent empty space.
 *
 * ````javascript
 * const model3 = ifcLoader.load({
 *     id: "myModel3",
 *     src: "../assets/models/ifc/Duplex.ifc",
 *     excludeTypes: ["IfcSpace"]
 * });
 * ````
 *
 * ## Configuring initial IFC object appearances
 *
 * We can specify the custom initial appearance of loaded objects according to their IFC types.
 *
 * This is useful for things like:
 *
 * * setting the colors to our objects according to their IFC types,
 * * automatically hiding ````IfcSpace```` objects, and
 * * ensuring that ````IfcWindow```` objects are always transparent.
 * <br>
 * In the example below, we'll load a model, while configuring ````IfcSpace```` elements to be always initially invisible,
 * and ````IfcWindow```` types to be always translucent blue.
 *
 * ````javascript
 * const myObjectDefaults = {
 *
 *      IfcSpace: {
 *          visible: false
 *      },
 *      IfcWindow: {
 *          colorize: [0.337255, 0.303922, 0.870588], // Blue
 *          opacity: 0.3
 *      },
 *
 *      //...
 *
 *      DEFAULT: {
 *          colorize: [0.5, 0.5, 0.5]
 *      }
 * };
 *
 * const model4 = ifcLoader.load({
 *      id: "myModel4",
 *      src: "../assets/models/ifc/Duplex.ifc",
 *      objectDefaults: myObjectDefaults // Use our custom initial default states for object Entities
 * });
 * ````
 *
 * When we don't customize the appearance of IFC types, as just above, then IfcSpace elements tend to obscure other
 * elements, which can be confusing.
 *
 * It's often helpful to make IfcSpaces transparent and unpickable, like this:
 *
 * ````javascript
 * const ifcLoader = new IFCLoaderPlugin(viewer, {
 *    wasmPath: "../dist/",
 *    objectDefaults: {
 *        IfcSpace: {
 *            pickable: false,
 *            opacity: 0.2
 *        }
 *    }
 * });
 * ````
 *
 * Alternatively, we could just make IfcSpaces invisible, which also makes them unpickable:
 *
 * ````javascript
 * const ifcLoader = new IFCLoaderPlugin(viewer, {
 *    wasmPath: "../dist/",
 *    objectDefaults: {
 *        IfcSpace: {
 *            visible: false
 *        }
 *    }
 * });
 * ````
 *
 * ## Configuring a custom data source
 *
 * By default, IFCLoaderPlugin will load IFC files over HTTP.
 *
 * In the example below, we'll customize the way IFCLoaderPlugin loads the files by configuring it with our own data source
 * object. For simplicity, our custom data source example also uses HTTP, using a couple of xeokit utility functions.
 *
 * ````javascript
 * import {utils} from "xeokit-sdk.es.js";
 *
 * class MyDataSource {
 *
 *      constructor() {
 *      }
 *
 *      // Gets the contents of the given IFC file in an arraybuffer
 *      getIFC(src, ok, error) {
 *          console.log("MyDataSource#getIFC(" + IFCSrc + ", ... )");
 *          utils.loadArraybuffer(src,
 *              (arraybuffer) => {
 *                  ok(arraybuffer);
 *              },
 *              function (errMsg) {
 *                  error(errMsg);
 *              });
 *      }
 * }
 *
 * const ifcLoader2 = new IFCLoaderPlugin(viewer, {
 *       dataSource: new MyDataSource()
 * });
 *
 * const model5 = ifcLoader2.load({
 *      id: "myModel5",
 *      src: "../assets/models/ifc/Duplex.ifc"
 * });
 * ````
 *
 * ## Loading multiple copies of a model, without object ID clashes
 *
 * Sometimes we need to load two or more instances of the same model, without having clashes
 * between the IDs of the equivalent objects in the model instances.
 *
 * As shown in the example below, we do this by setting {@link IFCLoaderPlugin#globalizeObjectIds} ````true```` before we load our models.
 *
 * ````javascript
 * ifcLoader.globalizeObjectIds = true;
 *
 * const model = ifcLoader.load({
 *      id: "model1",
 *      src: "../assets/models/ifc/Duplex.ifc"
 * });
 *
 * const model2 = ifcLoader.load({
 *    id: "model2",
 *    src: "../assets/models/ifc/Duplex.ifc"
 * });
 * ````
 *
 * For each {@link Entity} loaded by these two calls, {@link Entity#id} and {@link MetaObject#id} will get prefixed by
 * the ID of their model, in order to avoid ID clashes between the two models.
 *
 * An Entity belonging to the first model will get an ID like this:
 *
 * ````
 * myModel1#0BTBFw6f90Nfh9rP1dlXrb
 * ````
 *
 * The equivalent Entity in the second model will get an ID like this:
 *
 * ````
 * myModel2#0BTBFw6f90Nfh9rP1dlXrb
 * ````
 *
 * Now, to update the visibility of both of those Entities collectively, using {@link Scene#setObjectsVisible}, we can
 * supply just the IFC product ID part to that method:
 *
 * ````javascript
 * myViewer.scene.setObjectVisibilities("0BTBFw6f90Nfh9rP1dlXrb", true);
 * ````
 *
 * The method, along with {@link Scene#setObjectsXRayed}, {@link Scene#setObjectsHighlighted} etc, will internally expand
 * the given ID to refer to the instances of that Entity in both models.
 *
 * We can also, of course, reference each Entity directly, using its globalized ID:
 *
 * ````javascript
 * myViewer.scene.setObjectVisibilities("myModel1#0BTBFw6f90Nfh9rP1dlXrb", true);
 *````
 *
 * @class IFCLoaderPlugin
 * @since 2.0.13
 */
export class IFCLoaderPlugin extends Plugin {
    /**
     * @constructor
     *
     * @param {Viewer} viewer The Viewer.
     * @param {Object} cfg  Plugin configuration.
     * @param {String} [cfg.id="ifcLoader"] Optional ID for this plugin, so that we can find it within {@link Viewer#plugins}.
     * @param {String} cfg.wasmPath Path to ````web-ifc.wasm````, required by IFCLoaderlugin.
     * @param {Object} [cfg.objectDefaults] Map of initial default states for each loaded {@link Entity} that represents an object.  Default value is {@link IFCObjectDefaults}.
     * @param {Object} [cfg.dataSource] A custom data source through which the IFCLoaderPlugin can load model and metadata files. Defaults to an instance of {@link IFCDefaultDataSource}, which loads uover HTTP.
     * @param {String[]} [cfg.includeTypes] When loading metadata, only loads objects that have {@link MetaObject}s with {@link MetaObject#type} values in this list.
     * @param {String[]} [cfg.excludeTypes] When loading metadata, never loads objects that have {@link MetaObject}s with {@link MetaObject#type} values in this list.
     * @param {Boolean} [cfg.excludeUnclassifiedObjects=false] When loading metadata and this is ````true````, will only load {@link Entity}s that have {@link MetaObject}s (that are not excluded). This is useful when we don't want Entitys in the Scene that are not represented within IFC navigation components, such as {@link TreeViewPlugin}.
     * @param {Number} [cfg.maxGeometryBatchSize=50000000] Maximum geometry batch size, as number of vertices. This is optionally supplied
     * to limit the size of the batched geometry arrays that {@link PerformanceModel} internally creates for batched geometries.
     * A low value means less heap allocation/de-allocation while loading batched geometries, but more draw calls and
     * slower rendering speed. A high value means larger heap allocation/de-allocation while loading, but less draw calls
     * and faster rendering speed. It's recommended to keep this somewhere roughly between ````50000```` and ````50000000```.
     */
    constructor(viewer: Viewer, cfg?: {
        id?: string;
        wasmPath: string;
        objectDefaults?: any;
        dataSource?: any;
        includeTypes?: string[];
        excludeTypes?: string[];
        excludeUnclassifiedObjects?: boolean;
        maxGeometryBatchSize?: number;
    });
    _maxGeometryBatchSize: number;
    /**
     * Sets a custom data source through which the IFCLoaderPlugin can load IFC files.
     *
     * Default value is {@link IFCDefaultDataSource}, which loads via HTTP.
     *
     * @type {Object}
     */
    set dataSource(arg: any);
    /**
     * Gets the custom data source through which the IFCLoaderPlugin can load IFC files.
     *
     * Default value is {@link IFCDefaultDataSource}, which loads via HTTP.
     *
     * @type {Object}
     */
    get dataSource(): any;
    /**
     * Sets map of initial default states for each loaded {@link Entity} that represents an object.
     *
     * Default value is {@link IFCObjectDefaults}.
     *
     * @type {{String: Object}}
     */
    set objectDefaults(arg: {
        String: any;
    });
    /**
     * Gets map of initial default states for each loaded {@link Entity} that represents an object.
     *
     * Default value is {@link IFCObjectDefaults}.
     *
     * @type {{String: Object}}
     */
    get objectDefaults(): {
        String: any;
    };
    /**
     * Sets the whitelist of the IFC types loaded by this IFCLoaderPlugin.
     *
     * When loading IFC models, causes this IFCLoaderPlugin to only load objects whose types are in this
     * list. An object's type is indicated by its {@link MetaObject}'s {@link MetaObject#type}.
     *
     * Default value is ````undefined````.
     *
     * @type {String[]}
     */
    set includeTypes(arg: string[]);
    /**
     * Gets the whitelist of the IFC types loaded by this IFCLoaderPlugin.
     *
     * When loading IFC models, causes this IFCLoaderPlugin to only load objects whose types are in this
     * list. An object's type is indicated by its {@link MetaObject}'s {@link MetaObject#type}.
     *
     * Default value is ````undefined````.
     *
     * @type {String[]}
     */
    get includeTypes(): string[];
    /**
     * Sets the blacklist of IFC types that are never loaded by this IFCLoaderPlugin.
     *
     * When IFC models, causes this IFCLoaderPlugin to **not** load objects whose types are in this
     * list. An object's type is indicated by its {@link MetaObject}'s {@link MetaObject#type}.
     *
     * Default value is ````undefined````.
     *
     * @type {String[]}
     */
    set excludeTypes(arg: string[]);
    /**
     * Gets the blacklist of IFC types that are never loaded by this IFCLoaderPlugin.
     *
     * When loading IFC models, causes this IFCLoaderPlugin to **not** load objects whose types are in this
     * list. An object's type is indicated by its {@link MetaObject}'s {@link MetaObject#type}.
     *
     * Default value is ````undefined````.
     *
     * @type {String[]}
     */
    get excludeTypes(): string[];
    /**
     * Sets whether we load objects that don't have IFC types.
     *
     * When loading IFC models and this is ````true````, IFCLoaderPlugin will not load objects
     * that don't have IFC types.
     *
     * Default value is ````false````.
     *
     * @type {Boolean}
     */
    set excludeUnclassifiedObjects(arg: boolean);
    /**
     * Gets whether we load objects that don't have IFC types.
     *
     * When loading IFC models and this is ````true````, IFCLoaderPlugin will not load objects
     * that don't have IFC types.
     *
     * Default value is ````false````.
     *
     * @type {Boolean}
     */
    get excludeUnclassifiedObjects(): boolean;
    _ifcAPI: WebIFC.IfcAPI;
    /**
     * Gets the ````IFC```` format versions supported by this IFCLoaderPlugin.
     * @returns {string[]}
     */
    get supportedVersions(): string[];
    _dataSource: any;
    _objectDefaults: {
        String: any;
    };
    _includeTypes: string[];
    _excludeTypes: string[];
    _excludeUnclassifiedObjects: boolean;
    /**
     * Sets whether IFCLoaderPlugin globalizes each {@link Entity#id} and {@link MetaObject#id} as it loads a model.
     *
     * Set  this ````true```` when you need to load multiple instances of the same model, to avoid ID clashes
     * between the objects in the different instances.
     *
     * When we load a model with this set ````true````, then each {@link Entity#id} and {@link MetaObject#id} will be
     * prefixed by the ID of the model, ie. ````<modelId>#<objectId>````.
     *
     * {@link Entity#originalSystemId} and {@link MetaObject#originalSystemId} will always hold the original, un-prefixed, ID values.
     *
     * Default value is ````false````.
     *
     * See the main {@link IFCLoaderPlugin} class documentation for usage info.
     *
     * @type {Boolean}
     */
    set globalizeObjectIds(arg: boolean);
    /**
     * Gets whether IFCLoaderPlugin globalizes each {@link Entity#id} and {@link MetaObject#id} as it loads a model.
     *
     * Default value is ````false````.
     *
     * @type {Boolean}
     */
    get globalizeObjectIds(): boolean;
    _globalizeObjectIds: boolean;
    /**
     * Loads an ````IFC```` model into this IFCLoaderPlugin's {@link Viewer}.
     *
     * @param {*} params Loading parameters.
     * @param {String} [params.id] ID to assign to the root {@link Entity#id}, unique among all components in the Viewer's {@link Scene}, generated automatically by default.
     * @param {String} [params.src] Path to a IFC file, as an alternative to the ````ifc```` parameter.
     * @param {ArrayBuffer} [params.ifc] The IFC file data, as an alternative to the ````src```` parameter.
     * @param {ArrayBuffer} [params.loadMetadata=true] Whether to load IFC metadata (metaobjects and property sets).
     * @param {{String:Object}} [params.objectDefaults] Map of initial default states for each loaded {@link Entity} that represents an object. Default value is {@link IFCObjectDefaults}.
     * @param {String[]} [params.includeTypes] When loading metadata, only loads objects that have {@link MetaObject}s with {@link MetaObject#type} values in this list.
     * @param {String[]} [params.excludeTypes] When loading metadata, never loads objects that have {@link MetaObject}s with {@link MetaObject#type} values in this list.
     * @param {Boolean} [params.edges=false] Whether or not xeokit renders the model with edges emphasized.
     * @param {Number[]} [params.position=[0,0,0]] The model World-space 3D position.
     * @param {Number[]} [params.scale=[1,1,1]] The model's World-space scale.
     * @param {Number[]} [params.rotation=[0,0,0]] The model's World-space rotation, as Euler angles given in degrees, for each of the X, Y and Z axis.
     * @param {Number[]} [params.matrix=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]] The model's world transform matrix. Overrides the position, scale and rotation parameters.
     * @param {Boolean} [params.edges=false] Indicates if the model's edges are initially emphasized.
     * @param {Boolean} [params.saoEnabled=true] Indicates if Scalable Ambient Obscurance (SAO) will apply to the model. SAO is configured by the Scene's {@link SAO} component. Only works when {@link SAO#enabled} is also ````true````
     * @param {Boolean} [params.pbrEnabled=false] Indicates if physically-based rendering (PBR) will apply to the model. Only works when {@link Scene#pbrEnabled} is also ````true````.
     * @param {Number} [params.backfaces=false] When we set this ````true````, then we force rendering of backfaces for the model. When we leave this ````false````, then we allow the Viewer to decide when to render backfaces. In that case, the Viewer will hide backfaces on watertight meshes, show backfaces on open meshes, and always show backfaces on meshes when we slice them open with {@link SectionPlane}s.
     * @param {Boolean} [params.excludeUnclassifiedObjects=false] When loading metadata and this is ````true````, will only load {@link Entity}s that have {@link MetaObject}s (that are not excluded). This is useful when we don't want Entitys in the Scene that are not represented within IFC navigation components, such as {@link TreeViewPlugin}.
     * @param {Boolean} [params.globalizeObjectIds=false] Indicates whether to globalize each {@link Entity#id} and {@link MetaObject#id}, in case you need to prevent ID clashes with other models. See {@link IFCLoaderPlugin#globalizeObjectIds} for more info.
     * @param {Object} [params.stats] Collects model statistics.
     * @returns {Entity} Entity representing the model, which will have {@link Entity#isModel} set ````true```` and will be registered by {@link Entity#id} in {@link Scene#models}.
     */
    load(params?: any): Entity;
    _loadModel(src: any, params: any, options: any, performanceModel: any): void;
    _parseModel(arrayBuffer: any, params: any, options: any, performanceModel: any): void;
    _parseMetaObjects(ctx: any): void;
    _parseSpatialChildren(ctx: any, ifcElement: any, parentMetaObjectId: any): void;
    _createMetaObject(ctx: any, ifcElement: any, parentMetaObjectId: any): void;
    _parseRelatedItemsOfType(ctx: any, id: any, relation: any, related: any, type: any, parentMetaObjectId: any): void;
    _parsePropertySets(ctx: any): void;
    _parseGeometry(ctx: any): void;
}
import { Plugin } from "../../viewer/Plugin.js";
import * as WebIFC from "web-ifc/web-ifc-api.js";
