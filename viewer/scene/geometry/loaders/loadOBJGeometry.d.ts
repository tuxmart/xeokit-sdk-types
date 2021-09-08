/**
 * @desc Loads {@link Geometry} from OBJ.
 *
 * ## Usage
 *
 * In the example below we'll create a {@link Mesh} with {@link MetallicMaterial} and {@link ReadableGeometry} loaded from OBJ.
 *
 * [[Run this example](http://xeokit.github.io/xeokit-sdk/examples/#geometry_loaders_OBJ)]
 *
 * ````javascript
 * import {Viewer, Mesh, loadOBJGeometry, ReadableGeometry,
 *      MetallicMaterial, Texture} from "xeokit-sdk.es.js";
 *
 * const viewer = new Viewer({
 *      canvasId: "myCanvas"
 * });
 *
 * viewer.scene.camera.eye = [0.57, 1.37, 1.14];
 * viewer.scene.camera.look = [0.04, 0.58, 0.00];
 * viewer.scene.camera.up = [-0.22, 0.84, -0.48];
 *
 * loadOBJGeometry(viewer.scene, {
 *
 *      src: "models/obj/fireHydrant/FireHydrantMesh.obj",
 *      compressGeometry: false
 *
 *  }).then(function (geometryCfg) {
 *
 *      // Success
 *
 *      new Mesh(viewer.scene, {
 *
 *          geometry: new ReadableGeometry(viewer.scene, geometryCfg),
 *
 *          material: new MetallicMaterial(viewer.scene, {
 *
 *              baseColor: [1, 1, 1],
 *              metallic: 1.0,
 *              roughness: 1.0,
 *
 *              baseColorMap: new Texture(viewer.scene, {
 *                  src: "models/obj/fireHydrant/fire_hydrant_Base_Color.png",
 *                  encoding: "sRGB"
 *              }),
 *              normalMap: new Texture(viewer.scene, {
 *                  src: "models/obj/fireHydrant/fire_hydrant_Normal_OpenGL.png"
 *              }),
 *              roughnessMap: new Texture(viewer.scene, {
 *                  src: "models/obj/fireHydrant/fire_hydrant_Roughness.png"
 *              }),
 *              metallicMap: new Texture(viewer.scene, {
 *                  src: "models/obj/fireHydrant/fire_hydrant_Metallic.png"
 *              }),
 *              occlusionMap: new Texture(viewer.scene, {
 *                  src: "models/obj/fireHydrant/fire_hydrant_Mixed_AO.png"
 *              }),
 *
 *              specularF0: 0.7
 *          })
 *      });
 *  }, function () {
 *      // Error
 *  });
 * ````
 *
 * @function loadOBJGeometry
 * @param {Scene} scene Scene we're loading the geometry for.
 * @param {*} [cfg] Configs, also added to the result object.
 * @param {String} [cfg.src]  Path to OBJ file.
 * @returns {Object} Configuration to pass into a {@link Geometry} constructor, containing geometry arrays loaded from the OBJ file.
 */
export function loadOBJGeometry(scene: any, cfg?: any): any;
