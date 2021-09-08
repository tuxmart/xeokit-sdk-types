/**
 * @desc Creates a cylinder-shaped {@link Geometry}.
 *
 * ## Usage
 *
 * Creating a {@link Mesh} with a cylinder-shaped {@link ReadableGeometry} :
 *
 * [[Run this example](http://xeokit.github.io/xeokit-sdk/examples/#geometry_builders_buildCylinderGeometry)]
 *
 * ````javascript
 *
 * import {Viewer, Mesh, buildCylinderGeometry, ReadableGeometry, PhongMaterial, Texture} from "xeokit-sdk.es.js";
 *
 * const viewer = new Viewer({
 *      canvasId: "myCanvas"
 *  });
 *
 * viewer.camera.eye = [0, 0, 5];
 * viewer.camera.look = [0, 0, 0];
 * viewer.camera.up = [0, 1, 0];
 *
 * new Mesh(viewer.scene, {
 *      geometry: new ReadableGeometry(viewer.scene, buildCylinderGeometry({
 *          center: [0,0,0],
 *          radiusTop: 2.0,
 *          radiusBottom: 2.0,
 *          height: 5.0,
 *          radialSegments: 20,
 *          heightSegments: 1,
 *          openEnded: false
 *      }),
 *      material: new PhongMaterial(viewer.scene, {
 *         diffuseMap: new Texture(viewer.scene, {
 *             src: "textures/diffuse/uvGrid2.jpg"
 *         })
 *      })
 * });
 * ````
 *
 * @function buildCylinderGeometry
 * @param {*} [cfg] Configs
 * @param {String} [cfg.id] Optional ID for the {@link Geometry}, unique among all components in the parent {@link Scene}, generated automatically when omitted.
 * @param {Number[]} [cfg.center]  3D point indicating the center position.
 * @param {Number} [cfg.radiusTop=1]  Radius of top.
 * @param {Number} [cfg.radiusBottom=1]  Radius of bottom.
 * @param {Number} [cfg.height=1] Height.
 * @param {Number} [cfg.radialSegments=60]  Number of horizontal segments.
 * @param {Number} [cfg.heightSegments=1]  Number of vertical segments.
 * @param {Boolean} [cfg.openEnded=false]  Whether or not the cylinder has solid caps on the ends.
 * @returns {Object} Configuration for a {@link Geometry} subtype.
 */
export function buildCylinderGeometry(cfg?: any): any;
