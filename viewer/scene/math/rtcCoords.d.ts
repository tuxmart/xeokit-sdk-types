export function createRTCViewMat(viewMat: any, rtcCenter: any, rtcViewMat?: Float32Array): Float32Array;
/**
 * Converts a World-space 3D position to RTC.
 *
 * Given a double-precision World-space position, returns a double-precision relative-to-center (RTC) center pos
 * and a single-precision offset fom that center.
 * @private
 * @param {Float64Array} worldPos The World-space position.
 * @param {Float64Array} rtcCenter Double-precision relative-to-center (RTC) center pos.
 * @param {Float32Array} rtcPos Single-precision offset fom that center.
 */
export function worldToRTCPos(worldPos: Float64Array, rtcCenter: Float64Array, rtcPos: Float32Array): void;
/**
 * Converts a flat array of double-precision positions to RTC positions.
 *
 * Returns the RTC positions, along with a computed RTC center for those positions.
 *
 * When computing the RTC position, this function uses a modulus operation to ensure that, whenever possible,
 * identical RTC positions are reused for different positions arrays.
 * @private
 * @param {Float64Array} worldPositions Flat array of World-space 3D positions.
 * @param {Float64Array} rtcPositions Outputs the computed flat array of 3D RTC positions.
 * @param {Float64Array} rtcCenter Outputs the computed double-precision relative-to-center (RTC) center pos.
 * @param {Number} [cellSize=10000000] The size of each coordinate cell within the RTC coordinate system.
 * @returns {Boolean} ````True```` if the positions actually needed conversion to RTC, else ````false````. When
 * ````false````, we can safely ignore the data returned in ````rtcPositions```` and ````rtcCenter````,
 * since ````rtcCenter```` will equal ````[0,0,0]````, and ````rtcPositions```` will contain identical values to ````positions````.
 */
export function worldToRTCPositions(worldPositions: Float64Array, rtcPositions: Float64Array, rtcCenter: Float64Array, cellSize?: number): boolean;
/**
 * Converts an RTC 3D position to World-space.
 * @private
 * @param {Float64Array} rtcCenter Double-precision relative-to-center (RTC) center pos.
 * @param {Float32Array} rtcPos Single-precision offset fom that center.
 * @param {Float64Array} worldPos The World-space position.
 */
export function rtcToWorldPos(rtcCenter: Float64Array, rtcPos: Float32Array, worldPos: Float64Array): Float64Array;
/**
 * Given a 3D plane defined by distance from origin and direction, and an RTC center position,
 * return a plane position that is relative to the RTC center.
 * @private
 * @param dist
 * @param dir
 * @param rtcCenter
 * @param rtcPlanePos
 * @returns {*}
 */
export function getPlaneRTCPos(dist: any, dir: any, rtcCenter: any, rtcPlanePos: any): any;
