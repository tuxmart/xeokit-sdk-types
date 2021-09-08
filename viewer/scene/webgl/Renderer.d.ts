/**
 * @private
 */
export function Renderer(scene: any, options: any): void;
export class Renderer {
    /**
     * @private
     */
    private constructor();
    _occlusionTester: any;
    needStateSort: () => void;
    shadowsDirty: () => void;
    imageDirty: () => void;
    webglContextLost: () => void;
    webglContextRestored: (gl: any) => void;
    /**
     * Inserts a drawable into this renderer.
     *  @private
     */
    private addDrawable;
    /**
     * Removes a drawable from this renderer.
     *  @private
     */
    private removeDrawable;
    /**
     * Gets a unique pick ID for the given Pickable. A Pickable can be a {@link Mesh} or a {@link PerformanceMesh}.
     * @returns {Number} New pick ID.
     */
    getPickID: (entity: any) => number;
    /**
     * Released a pick ID for reuse.
     * @param {Number} pickID Pick ID to release.
     */
    putPickID: (pickID: number) => void;
    /**
     * Clears the canvas.
     *  @private
     */
    private clear;
    /**
     * Renders inserted drawables.
     *  @private
     */
    private render;
    /**
     * Picks an Entity.
     * @private
     */
    private pick;
    /**
     * Adds a {@link Marker} for occlusion testing.
     * @private
     * @param marker
     */
    private addMarker;
    /**
     * Notifies that a {@link Marker#worldPos} has updated.
     * @param marker
     */
    markerWorldPosUpdated: (marker: any) => void;
    /**
     * Removes a {@link Marker} from occlusion testing.
     * @param marker
     */
    removeMarker: (marker: any) => void;
    /**
     * Performs an occlusion test for all added {@link Marker}s, updating
     * their {@link Marker#visible} properties accordingly.
     */
    doOcclusionTest: () => void;
    /**
     * Read pixels from the renderer's current output. Performs a force-render first.
     * @param pixels
     * @param colors
     * @param len
     * @param opaqueOnly
     * @private
     */
    private readPixels;
    /**
     * Enter snapshot mode.
     *
     * Switches rendering to a hidden snapshot canvas.
     *
     * Exit snapshot mode using endSnapshot().
     */
    beginSnapshot: () => void;
    /**
     * When in snapshot mode, renders a frame of the current Scene state to the snapshot canvas.
     */
    renderSnapshot: () => void;
    /**
     * When in snapshot mode, gets an image of the snapshot canvas.
     *
     * @private
     * @returns {String} The image data URI.
     */
    private readSnapshot;
    /**
     * Exists snapshot mode.
     *
     * Switches rendering back to the main canvas.
     */
    endSnapshot: () => void;
    /**
     * Destroys this renderer.
     * @private
     */
    private destroy;
}
