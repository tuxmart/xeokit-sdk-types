/**
 * @desc Loads {@link Geometry} from 3DS.
 *
 * ## Usage
 *
 * In the example below we'll create a {@link Mesh} with {@link PhongMaterial}, {@link Texture} and a {@link ReadableGeometry} loaded from 3DS.
 *
 * [[Run this example](http://xeokit.github.io/xeokit-sdk/examples/#geometry_loaders_3DS)]
 *
 * ````javascript
 * import {Viewer, Mesh, load3DSGeometry, ReadableGeometry, PhongMaterial, Texture} from "xeokit-sdk.es.js";
 *
 * const viewer = new Viewer({
 *      canvasId: "myCanvas"
 * });
 *
 * viewer.scene.camera.eye = [40.04, 23.46, 79.06];
 * viewer.scene.camera.look = [-6.48, 13.92, -0.56];
 * viewer.scene.camera.up = [-0.04, 0.98, -0.08];
 *
 * load3DSGeometry(viewer.scene, {
 *      src: "models/3ds/lexus.3ds",
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
 *          material: new PhongMaterial(viewer.scene, {
 *
 *              emissive: [1, 1, 1],
 *              emissiveMap: new Texture({  // .3DS has no normals so relies on emissive illumination
 *                  src: "models/3ds/lexus.jpg"
 *              })
 *          }),
 *
 *          rotation: [-90, 0, 0] // +Z is up for this particular 3DS
 *      });
 *  }, function () {
 *      // Error
 *  });
 * ````
 *
 * @function load3DSGeometry
 * @param {Scene} scene Scene we're loading the geometry for.
 * @param {*} cfg Configs, also added to the result object.
 * @param {String} [cfg.src]  Path to 3DS file.
 * @returns {Object} Configuration to pass into a {@link Geometry} constructor, containing geometry arrays loaded from the OBJ file.
 */
export function load3DSGeometry(scene: any, cfg?: any): any;
