/**
 * @desc Creates wireframe vector text {@link Geometry}.
 *
 * ## Usage
 *
 * Creating a {@link Mesh} with vector text {@link ReadableGeometry} :
 *
 * [[Run this example](http://xeokit.github.io/xeokit-sdk/examples/#geometry_builders_buildVectorTextGeometry)]
 *
 * ````javascript
 *
 * import {Viewer, Mesh, buildVectorTextGeometry, ReadableGeometry, PhongMaterial} from "xeokit-sdk.es.js";
 *
 * const viewer = new Viewer({
 *      canvasId: "myCanvas"
 * });
 *
 * viewer.camera.eye = [0, 0, 100];
 * viewer.camera.look = [0, 0, 0];
 * viewer.camera.up = [0, 1, 0];
 *
 * new Mesh(viewer.scene, {
 *      geometry: new ReadableGeometry(viewer.scene, buildVectorTextGeometry({
 *          origin: [0,0,0],
 *          text: "On the other side of the screen, it all looked so easy"
 *      }),
 *      material: new PhongMaterial(viewer.scene, {
 *         diffuseMap: new Texture(viewer.scene, {
 *             src: "textures/diffuse/uvGrid2.jpg"
 *         })
 *      })
 * });
 * ````
 *
 * @function buildVectorTextGeometry
 * @param {*} [cfg] Configs
 * @param {String} [cfg.id] Optional ID, unique among all components in the parent {@link Scene}, generated automatically when omitted.
 * @param {Number[]} [cfg.center]  3D point indicating the center position.
 * @param {Number[]} [cfg.origin] 3D point indicating the top left corner.
 * @param {Number} [cfg.size=1] Size of each character.
 * @param {String} [cfg.text=""] The text.
 * @returns {Object} Configuration for a {@link Geometry} subtype.
 */
export function buildVectorTextGeometry(cfg?: any): any;
