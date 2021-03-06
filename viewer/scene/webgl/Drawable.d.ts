/**
 * @desc A drawable {@link Scene} element.
 *
 * @interface
 * @abstract
 * @private
 */
export class Drawable {
    /**
     * Returns true to indicate that this is a Drawable.
     * @type {Boolean}
     * @abstract
     */
    get isDrawable(): boolean;
    /**
     * Configures the appearance of this Drawable when x-rayed.
     *
     * Set to {@link Scene#xrayMaterial} by default.
     *
     * @type {EmphasisMaterial}
     * @abstract
     */
    get xrayMaterial(): any;
    /**
     * Configures the appearance of this Drawable when highlighted.
     *
     * Set to {@link Scene#highlightMaterial} by default.
     *
     * @type {EmphasisMaterial}
     * @abstract
     */
    get highlightMaterial(): any;
    /**
     * Configures the appearance of this Drawable when selected.
     *
     * Set to {@link Scene#selectedMaterial} by default.
     *
     * @type {EmphasisMaterial}
     * @abstract
     */
    get selectedMaterial(): any;
    /**
     * Configures the appearance of this Drawable when edges are enhanced.
     *
     * @type {EdgeMaterial}
     * @abstract
     */
    get edgeMaterial(): any;
    /**
     * Property with final value ````true```` to indicate that xeokit should render this Drawable in sorted order, relative to other Drawable of the same class.
     *
     * The sort order is determined by {@link Drawable#stateSortCompare}.
     *
     * Sorting is essential for rendering performance, so that xeokit is able to avoid applying runs of the same state changes to the GPU, ie. can collapse them.
     *
     * @type {boolean}
     * @abstract
     */
    get isStateSortable(): boolean;
    /**
     * Comparison function used by the renderer to determine the order in which xeokit should render the Drawable, relative to to other Drawablees.
     *
     * Sorting is essential for rendering performance, so that xeokit is able to avoid needlessly applying runs of the same rendering state changes to the GPU, ie. can collapse them.
     *
     * @param {Drawable} drawable1
     * @param {Drawable} drawable2
     * @returns {number}
     * @abstract
     */
    stateSortCompare(drawable1: Drawable, drawable2: Drawable): number;
    /**
     * Called by xeokit when about to render this Drawable, to generate {@link Drawable#renderFlags}.
     *
     * @abstract
     */
    rebuildRenderFlags(renderFlags: any): void;
    /**
     * Called by xeokit when about to render this Drawable, to get flags indicating what rendering effects to apply for it.
     * @type {RenderFlags}
     * @abstract
     */
    get renderFlags(): any;
    /**
     * Renders opaque edges using {@link Drawable#edgeMaterial}.
     *
     * See {@link RenderFlags#colorOpaque}.
     *
     * @param {FrameContext} frameCtx Renderer frame context.
     * @abstract
     */
    drawColorOpaque(renderFlags: any, frameCtx: any): void;
    /**
     * Renders transparent filled surfaces using normal appearance attributes.
     *
     * See {@link RenderFlags#colorTransparent}.
     *
     * @param {FrameContext} frameCtx Renderer frame context.
     * @abstract
     */
    drawColorTransparent(renderFlags: any, frameCtx: any): void;
    /**
     * Renders pixel depths to an internally-managed depth target, for use in post-effects (eg. SAO).
     *
     * @param {FrameContext} frameCtx Renderer frame context.
     * @abstract
     */
    drawDepth(renderFlags: any, frameCtx: any): void;
    /**
     * Renders pixel normals to an internally-managed target, for use in post-effects (eg. SAO).
     *
     * @param {FrameContext} frameCtx Renderer frame context.
     * @abstract
     */
    drawNormals(renderFlags: any, frameCtx: any): void;
    /**
     * Renders x-ray fill using {@link Drawable#xrayMaterial}.
     *
     * See {@link RenderFlags#xrayedSilhouetteOpaque} and {@link RenderFlags#xrayedSilhouetteTransparent}.
     *
     * @param {FrameContext} frameCtx Renderer frame context.
     * @abstract
     */
    drawSilhouetteXRayed(renderFlags: any, frameCtx: any): void;
    /**
     * Renders highlighted transparent fill using {@link Drawable#highlightMaterial}.
     *
     * See {@link RenderFlags#highlightedSilhouetteOpaque} and {@link RenderFlags#highlightedSilhouetteTransparent}.
     *
     * @param {FrameContext} frameCtx Renderer frame context.
     * @abstract
     */
    drawSilhouetteHighlighted(renderFlags: any, frameCtx: any): void;
    /**
     * Renders selected fill using {@link Drawable#selectedMaterial}.
     *
     * See {@link RenderFlags#selectedSilhouetteOpaque} and {@link RenderFlags#selectedSilhouetteTransparent}.
     *
     * @param {FrameContext} frameCtx Renderer frame context.
     * @abstract
     */
    drawSilhouetteSelected(renderFlags: any, frameCtx: any): void;
    /**
     * Renders opaque normal edges using {@link Drawable#edgeMaterial}.
     *
     * See {@link RenderFlags#edgesOpaque}.
     *
     * @param {FrameContext} frameCtx Renderer frame context.
     * @abstract
     */
    drawEdgesColorOpaque(renderFlags: any, frameCtx: any): void;
    /**
     * Renders transparent normal edges using {@link Drawable#edgeMaterial}.
     *
     * See {@link RenderFlags#edgesTransparent}.
     *
     * @param {FrameContext} frameCtx Renderer frame context.
     * @abstract
     */
    drawEdgesColorTransparent(renderFlags: any, frameCtx: any): void;
    /**
     * Renders x-rayed edges using {@link Drawable#xrayMaterial}.
     *
     * See {@link RenderFlags#xrayedEdgesOpaque}.
     *
     * @param {FrameContext} frameCtx Renderer frame context.
     * @abstract
     */
    drawEdgesXRayed(renderFlags: any, frameCtx: any): void;
    /**
     * Renders highlighted edges using {@link Drawable#highlightMaterial}.
     *
     * See {@link RenderFlags#highlightedEdgesOpaque}.
     *
     * @param {FrameContext} frameCtx Renderer frame context.
     * @abstract
     */
    drawEdgesHighlighted(renderFlags: any, frameCtx: any): void;
    /**
     * Renders selected edges using {@link Drawable#selectedMaterial}.
     *
     * See {@link RenderFlags#selectedEdgesOpaque}.
     *
     * @param {FrameContext} frameCtx Renderer frame context.
     * @abstract
     */
    drawEdgesSelected(renderFlags: any, frameCtx: any): void;
    /**
     * Renders occludable elements to a frame buffer where they will be tested to see if they occlude any occlusion probe markers.
     *
     * @param {FrameContext} frameCtx Renderer frame context.
     * @abstract
     */
    drawOcclusion(renderFlags: any, frameCtx: any): void;
    /**
     * Renders depths to a shadow map buffer..
     *
     * @param {FrameContext} frameCtx Renderer frame context.
     * @abstract
     */
    drawShadow(renderFlags: any, frameCtx: any): void;
}
