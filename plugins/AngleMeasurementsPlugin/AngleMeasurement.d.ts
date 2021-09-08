/**
 * @desc Measures the angle indicated by three 3D points.
 *
 * See {@link AngleMeasurementsPlugin} for more info.
 */
export class AngleMeasurement extends Component {
    /**
     * The {@link AngleMeasurementsPlugin} that owns this AngleMeasurement.
     * @type {AngleMeasurementsPlugin}
     */
    plugin: any;
    _container: any;
    _originMarker: Marker;
    _cornerMarker: Marker;
    _targetMarker: Marker;
    _originWorld: any;
    _cornerWorld: any;
    _targetWorld: any;
    _wp: Float64Array;
    _vp: Float64Array;
    _pp: Float64Array;
    _cp: Int16Array;
    _originDot: Dot;
    _cornerDot: Dot;
    _targetDot: Dot;
    _originWire: Wire;
    _targetWire: Wire;
    _angleLabel: Label;
    _wpDirty: boolean;
    _vpDirty: boolean;
    _cpDirty: boolean;
    _visible: boolean;
    _originVisible: boolean;
    _cornerVisible: boolean;
    _targetVisible: boolean;
    _originWireVisible: boolean;
    _targetWireVisible: boolean;
    _angleVisible: boolean;
    _onViewMatrix: any;
    _onProjMatrix: any;
    _onCanvasBoundary: any;
    /**
     * Sets whether this AngleMeasurement is visible or not.
     *
     * @type Boolean
     */
    set visible(arg: boolean);
    /**
     * Gets whether this AngleMeasurement is visible or not.
     *
     * @type Boolean
     */
    get visible(): boolean;
    /**
     * Sets if the origin {@link Marker} is visible.
     *
     * @type {Boolean}
     */
    set originVisible(arg: boolean);
    /**
     * Gets if the origin {@link Marker} is visible.
     *
     * @type {Boolean}
     */
    get originVisible(): boolean;
    /**
     * Sets if the corner {@link Marker} is visible.
     *
     * @type {Boolean}
     */
    set cornerVisible(arg: boolean);
    /**
     * Gets if the corner {@link Marker} is visible.
     *
     * @type {Boolean}
     */
    get cornerVisible(): boolean;
    /**
     * Sets if the target {@link Marker} is visible.
     *
     * @type {Boolean}
     */
    set targetVisible(arg: boolean);
    /**
     * Gets if the target {@link Marker} is visible.
     *
     * @type {Boolean}
     */
    get targetVisible(): boolean;
    /**
     * Sets if the wire between the origin and the corner is visible.
     *
     * @type {Boolean}
     */
    set originWireVisible(arg: boolean);
    /**
     * Gets if the wire between the origin and the corner is visible.
     *
     * @type {Boolean}
     */
    get originWireVisible(): boolean;
    /**
     * Sets if the wire between the target and the corner is visible.
     *
     * @type {Boolean}
     */
    set targetWireVisible(arg: boolean);
    /**
     * Gets if the wire between the target and the corner is visible.
     *
     * @type {Boolean}
     */
    get targetWireVisible(): boolean;
    /**
     * Sets if the angle label is visible.
     *
     * @type {Boolean}
     */
    set angleVisible(arg: boolean);
    /**
     * Gets if the angle label is visible.
     *
     * @type {Boolean}
     */
    get angleVisible(): boolean;
    _angle: number;
    /**
     * Gets the origin {@link Marker}.
     *
     * @type {Marker}
     */
    get origin(): Marker;
    /**
     * Gets the corner {@link Marker}.
     *
     * @type {Marker}
     */
    get corner(): Marker;
    /**
     * Gets the target {@link Marker}.
     *
     * @type {Marker}
     */
    get target(): Marker;
    /**
     * Gets the angle between two connected 3D line segments, given
     * as three positions on the surface(s) of one or more {@link Entity}s.
     *
     * @type {Number}
     */
    get angle(): number;
}
import { Component } from "../../viewer/scene/Component.js";
import { Marker } from "../../viewer/scene/marker/Marker.js";
import { Dot } from "../lib/html/Dot.js";
import { Wire } from "../lib/html/Wire.js";
import { Label } from "../lib/html/Label.js";
