/**
 * @desc Creates a grid-shaped {@link Geometry}.
 *
 * ## Usage
 *
 * Creating a {@link Mesh} with a GridGeometry and a {@link PhongMaterial}:
 *
 * [[Run this example](http://xeokit.github.io/xeokit-sdk/examples/#geometry_builders_buildGridGeometry)]
 *
 * ````javascript
 * import {Viewer, Mesh, buildGridGeometry, VBOGeometry, PhongMaterial, Texture} from "xeokit-sdk.es.js";
 *
 * const viewer = new Viewer({
 *      canvasId: "myCanvas"
 * });
 *
 * viewer.camera.eye = [0, 0, 5];
 * viewer.camera.look = [0, 0, 0];
 * viewer.camera.up = [0, 1, 0];
 *
 * new Mesh(viewer.scene, {
 *      geometry: new VBOGeometry(viewer.scene, buildGridGeometry({
 *          size: 1000,
 *          divisions: 500
 *      })),
 *      material: new PhongMaterial(viewer.scene, {
 *          color: [0.0, 0.0, 0.0],
 *          emissive: [0.4, 0.4, 0.4]
 *      }),
 *      position: [0, -1.6, 0]
 * });
 * ````
 *
 * @function buildGridGeometry
 * @param {*} [cfg] Configs
 * @param {String} [cfg.id] Optional ID for the {@link Geometry}, unique among all components in the parent {@link Scene}, generated automatically when omitted.
 * @param {Number} [cfg.size=1] Dimension on the X and Z-axis.
 * @param {Number} [cfg.divisions=1] Number of divisions on X and Z axis..
 * @returns {Object} Configuration for a {@link Geometry} subtype.
 */
export function buildGridGeometry(cfg?: any): any;
