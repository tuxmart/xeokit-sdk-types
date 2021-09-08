/**
 * @desc Creates a torus-shaped {@link Geometry}.
 *
 * ## Usage
 * Creating a {@link Mesh} with a torus-shaped {@link ReadableGeometry} :
 *
 * [[Run this example](http://xeokit.github.io/xeokit-sdk/examples/#geometry_builders_buildTorusGeometry)]
 *
 * ````javascript
 * import {Viewer, Mesh, buildTorusGeometry, ReadableGeometry, PhongMaterial, Texture} from "xeokit-sdk.es.js";
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
 *      geometry: new ReadableGeometry(viewer.scene, buildTorusGeometry({
 *          center: [0,0,0],
 *          radius: 1.0,
 *          tube: 0.5,
 *          radialSegments: 32,
 *          tubeSegments: 24,
 *          arc: Math.PI * 2.0
 *      }),
 *      material: new PhongMaterial(viewer.scene, {
 *         diffuseMap: new Texture(viewer.scene, {
 *             src: "textures/diffuse/uvGrid2.jpg"
 *         })
 *      })
 * });
 * ````
 *
 * @function buildTorusGeometry
 * @param {*} [cfg] Configs
 * @param {String} [cfg.id] Optional ID for the {@link Geometry}, unique among all components in the parent {@link Scene}, generated automatically when omitted.
 * @param {Number[]} [cfg.center] 3D point indicating the center position.
 * @param {Number} [cfg.radius=1] The overall radius.
 * @param {Number} [cfg.tube=0.3] The tube radius.
 * @param {Number} [cfg.radialSegments=32] The number of radial segments.
 * @param {Number} [cfg.tubeSegments=24] The number of tubular segments.
 * @param {Number} [cfg.arc=Math.PI*0.5] The length of the arc in radians, where Math.PI*2 is a closed torus.
 * @returns {Object} Configuration for a {@link Geometry} subtype.
 */
export function buildTorusGeometry(cfg?: any): any;
