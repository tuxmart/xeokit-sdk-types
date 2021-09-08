/**
 * @desc Creates box-shaped {@link Geometry}.
 *
 * ## Usage
 *
 * In the example below we'll create a {@link Mesh} with a box-shaped {@link ReadableGeometry}.
 *
 * [[Run this example](http://xeokit.github.io/xeokit-sdk/examples/#geometry_builders_buildBoxGeometry)]
 *
 * ````javascript
 * import {Viewer, Mesh, buildBoxGeometry, ReadableGeometry, PhongMaterial, Texture} from "xeokit-sdk.es.js";
 *
 * const viewer = new Viewer({
 *         canvasId: "myCanvas"
 * });
 *
 * viewer.scene.camera.eye = [0, 0, 5];
 * viewer.scene.camera.look = [0, 0, 0];
 * viewer.scene.camera.up = [0, 1, 0];
 *
 * new Mesh(viewer.scene, {
 *      geometry: new ReadableGeometry(viewer.scene, buildBoxGeometry({
 *         center: [0,0,0],
 *         xSize: 1,  // Half-size on each axis
 *         ySize: 1,
 *         zSize: 1
 *      }),
 *      material: new PhongMaterial(viewer.scene, {
 *         diffuseMap: new Texture(viewer.scene, {
 *             src: "textures/diffuse/uvGrid2.jpg"
 *         })
 *      })
 * });
 * ````
 *
 * @function buildBoxGeometry
 * @param {*} [cfg] Configs
 * @param {String} [cfg.id] Optional ID, unique among all components in the parent {@link Scene}, generated automatically when omitted.
 * @param {Number[]} [cfg.center]  3D point indicating the center position.
 * @param {Number} [cfg.xSize=1.0]  Half-size on the X-axis.
 * @param {Number} [cfg.ySize=1.0]  Half-size on the Y-axis.
 * @param {Number} [cfg.zSize=1.0]  Half-size on the Z-axis.
 * @returns {Object} Configuration for a {@link Geometry} subtype.
 */
export function buildBoxGeometry(cfg?: any): any;
